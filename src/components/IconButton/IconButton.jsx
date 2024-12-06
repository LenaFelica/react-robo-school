import React from 'react';

import styles from './IconButton.module.scss';

export const IconButton = ({
  icon,
  onClick,
  additionalClassname,
  isLink = false,
  href = '/',
}) => {
  const createButtonClassname = () => {
    const baseClassname = `${styles.button}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }
    return baseClassname;
  };

  if (isLink) {
    return (
      <a href={href} onClick={onClick} className={createButtonClassname()}>
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={createButtonClassname()}>
      {icon}
    </button>
  );
};
