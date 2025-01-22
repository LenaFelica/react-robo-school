import React from 'react';

import styles from './CourseInput.module.scss';

export const CourseInput = ({
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
    {error && <p className={styles.error}>{error.message}</p>}
  </>
);
