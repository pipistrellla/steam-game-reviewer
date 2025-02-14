import React, { FC, memo, useState } from 'react';

import { Auth } from '@/features/Auth';
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

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            <VStack>
                <BugButton />
                <Text text="Главная страница, скоро тут появятся рекомендации или еще что-то" />
                <Button onClick={() => setAuthIsOpen(true)}>
                    Войти в аккаунт
                </Button>
                <Auth isOpen={AuthIsOpen} setIsOpen={setAuthIsOpen} />
            </VStack>
        </div>
    );
});
