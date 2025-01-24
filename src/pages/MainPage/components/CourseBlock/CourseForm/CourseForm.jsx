import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { schema } from './validationSchema';

import styles from './CourseForm.module.scss';

export const CourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
    reset();
  };

  return (
    <form
      className={styles.form}
      id="add-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Input
        id="name"
        placeholder="Имя"
        register={register('name')}
        error={errors.name}
      />
      <Input
        id="phone"
        type="tel"
        placeholder="Телефон"
        register={register('phone')}
        error={errors.phone}
      />
      <Input
        id="email"
        type="email"
        placeholder="E-mail"
        register={register('email')}
        error={errors.email}
      />
      <Button className={styles.button} variant="dark">
        Оформить заявку
      </Button>
    </form>
  );
};
