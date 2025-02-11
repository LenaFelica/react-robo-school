import React from 'react';

import styles from './Button.module.scss';

export const Button = ({
  children,
  onClick,
  variant,
  additionalClassname,
  ...rest
}) => {
  const createButtonVariant = () => {
    switch (true) {
      case variant === 'link':
        return `${styles.link}`;
      case variant === 'dark':
        return `${styles.button} ${styles.dark}`;
      default:
        return styles.button;
    }
  };

  const createButtonClassname = () => {
    const baseClassname = `${createButtonVariant()}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <button onClick={onClick} className={createButtonClassname()} {...rest}>
      {children}
    </button>
  );
};
