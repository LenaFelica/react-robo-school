import React from 'react';

import styles from './Input.module.scss';

export const Input = ({
  id,
  type = 'text',
  placeholder,
  register,
  error,
  ...rest
}) => (
  <>
    <input
      className={`${styles.input} ${error ? styles.error : ''}`}
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      {...rest}
    />
  </>
);
