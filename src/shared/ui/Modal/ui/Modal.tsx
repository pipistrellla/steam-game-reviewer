import { FC, ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import cls from './Modal.module.scss';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';


interface modalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY: number = 300;

export const Modal: FC<modalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const {
        close: closeHandler,
        isClosing,
        isMounted,
    } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const additionalClasses = [className, cls.modal];

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, additionalClasses)}>
                <Overlay onClick={() => closeHandler()} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
