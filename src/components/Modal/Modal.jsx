import React, { useEffect } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import { lockScroll, unlockScroll } from 'utils/scrollLock';
import { CloseBlack } from 'assets/icons';

import styles from './Modal.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    unlockScroll();
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={handleModalClose} />
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeModalBtn} onClick={handleModalClose}>
          {isMobile ? <CloseBlack /> : 'Закрыть'}
        </button>
      </div>
    </div>
  );
};
