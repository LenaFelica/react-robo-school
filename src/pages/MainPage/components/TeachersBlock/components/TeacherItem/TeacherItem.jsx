import React from 'react';

import { Button } from 'components/Button';
import { teachersImages } from 'assets/images';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher: { name, description, imageName } }) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={teachersImages[imageName]} alt={name} />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Button className={styles.btn} variant="link">
          Подробнее
        </Button>
      </div>
    </div>
  );
};
