import React, { FC, memo, useCallback } from 'react';

import ThemeIcon from '@/shared/assets/icon/theme.svg';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
    ({ className }: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();

        const onTogglehandler = useCallback(() => {
            toggleTheme((newTheme) => {
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            });
        }, [toggleTheme]);

        return (
            <Button
                className={classNames('', {}, [className])}
                variant="clear"
                onClick={onTogglehandler}
            >
                <img src={ThemeIcon} alt="theme" />
            </Button>
        );
    },
);
