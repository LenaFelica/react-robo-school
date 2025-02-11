import React, { useState } from 'react';

import { Button } from 'components/Button';
import { teachersImages } from 'assets/images';
import { Modal } from 'components/Modal';

import { TeacherModalContent } from './TeacherModalContent';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher }) => {
  const { id, name, description, imageName } = teacher;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img className={styles.img} src={teachersImages[imageName]} alt={name} />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Button className={styles.btn} variant="link" onClick={handleOpenModal}>
          Подробнее
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        additionalClassname={styles.modal}
      >
        <TeacherModalContent teacherId={id} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
