import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from 'components/Button';

import styles from './CourseForm.module.scss';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^[0-9]{11}$/, 'Телефон должен содержать ровно 11 цифр'),
  email: yup
    .string()
    .required('E-mail обязателен')
    .email('Некорректный e-mail'),
});

export const CourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
  };

  return (
    <form
      className={styles.form}
      id="add-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <input
        className={styles.input}
        id="name"
        {...register('name')}
        placeholder="Имя"
        autoComplete="off"
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input
        className={styles.input}
        id="phone"
        type="tel"
        {...register('phone')}
        placeholder="Телефон"
        autoComplete="off"
      />
      {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      <input
        className={styles.input}
        id="email"
        type="email"
        {...register('email')}
        placeholder="E-mail"
        autoComplete="off"
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <Button className={styles.button} variant="dark">
        Оформить заявку
      </Button>
    </form>
  );
};
