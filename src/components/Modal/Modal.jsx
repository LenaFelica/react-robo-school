import React, { useEffect, useRef } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';
import { useOutsideClick } from 'hooks/useOutsideClick';

import { lockScroll, unlockScroll } from 'utils/scrollLock';
import { CloseBlack } from 'assets/icons';

import styles from './Modal.module.scss';

export const Modal = ({
  children,
  isOpen,
  onClose,
  additionalClassname = '',
}) => {
  const { isMobile } = useWindowSize();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  useOutsideClick({
    ref: modalRef,
    handler: onClose,
    condition: isOpen,
  });

  if (!isOpen) {
    return null;
  }

  const createModalClassname = () => {
    const baseClassname = styles.modal;

    return additionalClassname
      ? `${baseClassname} ${additionalClassname}`
      : baseClassname;
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={createModalClassname()}>
      <div className={styles.modalBackdrop} onClick={handleBackdropClick} />
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeModalBtn} onClick={onClose}>
          {isMobile ? <CloseBlack /> : 'Закрыть'}
        </button>
      </div>
    </div>
  );
};
