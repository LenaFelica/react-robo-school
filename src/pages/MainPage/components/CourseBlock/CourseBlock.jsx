import React from 'react';

import { Container } from 'components/Container';

import { CourseForm } from './CourseForm';

import styles from './CourseBlock.module.scss';

export const CourseBlock = () => {
  return (
    <section className={styles.course}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Запишитесь на курс со скидкой 10%</h2>
            <p className={styles.description}>
              Акция действительна до 10 марта 2022 года
            </p>
          </div>
          <CourseForm />
        </div>
      </Container>
    </section>
  );
};
