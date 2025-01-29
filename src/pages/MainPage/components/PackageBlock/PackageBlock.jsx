import React from 'react';

import { Container } from 'components/Container';

import { PackageItem } from './PackageItem';

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
              <PackageItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
