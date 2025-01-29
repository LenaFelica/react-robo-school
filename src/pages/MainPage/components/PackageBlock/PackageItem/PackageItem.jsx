import React from 'react';

import { Button } from 'components/Button';

import styles from './PackageItem.module.scss';

export const PackageItem = ({ item: { id, title, price, description } }) => {
  return (
    <div key={id} className={styles.packageItem}>
      <h3 className={styles.packageTitle}>{title}</h3>
      <div className={styles.packageText}>
        <span className={styles.packagePrice}>{price}</span>
        <span className={styles.packageDescription}>{description}</span>
      </div>
      <Button additionalClassname={styles.button}>Оставить заявку</Button>
    </div>
  );
};
