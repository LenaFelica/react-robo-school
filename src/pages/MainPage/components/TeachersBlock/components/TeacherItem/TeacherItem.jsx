import React, { useState } from 'react';

import { Button } from 'components/Button';
import { teachersImages } from 'assets/images';
import { Modal } from 'components/Modal';

import { TeacherModalContent } from './TeacherModalContent';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher }) => {
  const { id, name, description, imageName } = teacher;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img src={teachersImages[imageName]} alt={name} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Button className={styles.btn} variant="link" onClick={handleModalOpen}>
          Подробнее
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <TeacherModalContent teacherId={id} onClose={handleModalClose} />
      </Modal>
    </div>
  );
};
