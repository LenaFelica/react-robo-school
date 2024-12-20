import React from 'react';

import { Button } from 'components/Button';

import styles from './TeacherItem.module.scss';

export const TeacherItem = ({ teacher, imagesMap }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={imagesMap[teacher.alt]}
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
