import React, { useEffect } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import { lockScroll, unlockScroll } from 'utils/scrollLock';
import { CloseBlack } from 'assets/icons';

import styles from './Modal.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isOpen) lockScroll();
    return unlockScroll;
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
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
