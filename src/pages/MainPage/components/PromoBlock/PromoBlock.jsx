import React from 'react';

import { Container } from 'components/Container';
import { Button } from 'components/Button';
import studentImage from 'assets/images/student.png';

import styles from './PromoBlock.module.scss';

export const PromoBlock = () => {
  return (
    <section className={styles.promo}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1 className={styles.title}>ROBO SCHOOL</h1>
            <div className={styles.subtitle}>
              Курсы повышения квалификации по робототехнике для педагогов
              начальной школы
            </div>
          </div>
          <Button additionalClassname={styles.button}>
            Записаться на курс
          </Button>
          <img className={styles.img} src={studentImage} alt="promo" />
        </div>
      </Container>
    </section>
  );
};
