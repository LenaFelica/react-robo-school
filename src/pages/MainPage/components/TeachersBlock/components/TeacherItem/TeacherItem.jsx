import React from 'react';

import { Button } from 'components/Button';
import { sliderImages } from 'assets/images';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={sliderImages[teacher.imageName]}
        alt={teacher.name}
      />
      <div className={styles.text}>
        <div className={styles.name}>{teacher.name}</div>
        <div className={styles.description}>{teacher.desc}</div>
        <Button className={styles.btn} variant="link">
          Подробнее
        </Button>
      </div>
    </div>
  );
};
