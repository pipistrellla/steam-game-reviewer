import { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Text } from '@/shared/ui/Text';

import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => {
    const { theme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Text text='Проверка теста'  />
        </div>
    );
};

export default withTheme(App);
