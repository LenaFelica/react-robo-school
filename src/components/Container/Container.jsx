import React from 'react';

import styles from './Container.module.scss';

export const Container = ({ children, isWide }) => {
  const createContainerClassname = () => {
    const baseClassname = styles.container;

    if (isWide) {
      return `${baseClassname} ${styles.wide}`;
    }

    return baseClassname;
  };

  return <div className={createContainerClassname()}>{children}</div>;
};
