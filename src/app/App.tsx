import { FC } from 'react';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => {
    const { theme } = useTheme();
    const repeatedArray = new Array(5).fill('123');

    return (
        <div className={classNames('app', {}, [theme])}>
            <MainLayout
                content={<AppRouter />}
                header={
                    <HStack gap="16">
                        {repeatedArray.map((e) => (
                            <Button>{e}</Button>
                        ))}
                    </HStack>
                }
                leftBar={<span>123123123123123</span>}
                rightBar={<span>123123123123123</span>}
            />
        </div>
    );
};

export default withTheme(App);
