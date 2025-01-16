import React from 'react';

import { Container } from 'components/Container';
import { Button } from 'components/Button';

import styles from './PackageBlock.module.scss';

const packageItems = [
  {
    id: 1,
    title: 'PRO',
    price: '20.000 ₽',
    description: 'УМК по робототетхнике и программированию',
  },
  {
    id: 2,
    title: 'ROBO',
    price: '15.000 ₽',
    description: 'УМК по робототетхнике',
  },
  {
    id: 3,
    title: 'PROG',
    price: '10.000 ₽',
    description: 'УМК по робототетхнике',
  },
];

export const PackageBlock = () => {
  return (
    <section className={styles.package}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Выберете нужный пакет</h2>
          <div className={styles.packageList}>
            {packageItems.map((item) => (
              <div key={item.id} className={styles.packageItem}>
                <h3 className={styles.packageTitle}>{item.title}</h3>
                <div className={styles.packageText}>
                  <span className={styles.packagePrice}>{item.price}</span>
                  <span className={styles.packageDescription}>
                    {item.description}
                  </span>
                </div>
                <Button additionalClassname={styles.button}>
                  Оставить заявку
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
