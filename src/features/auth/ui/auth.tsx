import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './auth.module.scss';

interface authProps {
className?: string;
}

export const auth: FC<authProps> = memo((props) => {
const { className } = props;

return (
    <div className={classNames(cls.auth, {}, [className])}>
        123
    </div>
);
})
