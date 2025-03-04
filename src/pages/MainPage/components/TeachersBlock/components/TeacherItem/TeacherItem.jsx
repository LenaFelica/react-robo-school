import React, { useState } from 'react';

import { Button } from 'components/Button';
import { teachersImages } from 'assets/images';
import { Modal } from 'components/Modal';

import { TeacherModalContent } from './TeacherModalContent';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher }) => {
  const { name, desc, imageName } = teacher;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.teacherItem}>
      <img src={teachersImages[imageName]} alt={name} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{desc}</div>
        <Button className={styles.btn} variant="link" onClick={handleModalOpen}>
          Подробнее
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <TeacherModalContent teacher={teacher} />
      </Modal>
    </div>
  );
};
