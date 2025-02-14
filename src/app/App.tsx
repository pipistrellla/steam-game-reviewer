import { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    );
};

export default withTheme(App);
