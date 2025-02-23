import React, { FC, memo, useState } from 'react';

import { Counter } from '@/entities/Counter';
import { counterReducer } from '@/entities/Counter/model/slice/CounterSlice';
import { Auth } from '@/features/Auth';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { BugButton } from '@/widgets/PageError';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = memo((props) => {
    const { className } = props;

    const [AuthIsOpen, setAuthIsOpen] = useState(false);
    const reducers: ReducersList = {
        counter: counterReducer,
    };

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            <VStack gap="16">
                <BugButton />
                <Text text="Главная страница, скоро тут появятся рекомендации или еще что-то" />
                <Button onClick={() => setAuthIsOpen(true)}>
                    Войти в аккаунт
                </Button>
                <Auth isOpen={AuthIsOpen} setIsOpen={setAuthIsOpen} />
                <DynamicModuleLoader reducers={reducers}>
                    <Counter />
                </DynamicModuleLoader>
            </VStack>
        </div>
    );
});
