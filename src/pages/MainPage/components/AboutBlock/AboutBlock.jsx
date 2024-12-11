import React from 'react';

import styles from './AboutBlock.module.scss';
import { Container } from 'components/Container';

export const AboutBlock = () => {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            <b>Robo School</b> – учреждение для формирования кадрового
            педагогического резерва в сфере робототехники и программирования
          </p>
          <div className={styles.items}>
            <div className={styles.item}>
              <span className={styles.number}>10</span>
              <span className={styles.description}>
                УМК по различным направлениям по робототехнике
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.number}>20</span>
              <span className={styles.description}>
                Школ, в которых запущена робототехника
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.number}>100</span>
              <span className={styles.description}>
                Педагогов прошедших курсы повышения квалификации
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.number}>10 000</span>
              <span className={styles.description}>
                Обученных детей на базе собственных центров
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
