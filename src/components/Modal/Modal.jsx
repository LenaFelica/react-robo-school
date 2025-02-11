import React, { useEffect, useRef } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick';

import styles from './Modal.module.scss';

export const Modal = ({
  children,
  isOpen,
  onClose,
  additionalClassname = '',
}) => {
  const modalRef = useRef(null);

  const handleModalClose = () => {
    onClose();
  };

  useOutsideClick({ ref: modalRef, handler: handleModalClose });

  useEffect(() => {
    console.log('Modal Ref:', modalRef.current);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('unscroll');
    } else {
      document.body.classList.remove('unscroll');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('unscroll');
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const createModalClassname = () => {
    const baseClassname = styles.modal;

    return additionalClassname
      ? `${baseClassname} ${additionalClassname}`
      : baseClassname;
  };

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={createModalClassname()}>
        {children}
      </div>
    </div>
  );
};
