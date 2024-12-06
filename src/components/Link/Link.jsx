import React from 'react';

import styles from './Link.module.scss';

export const Link = ({ href, children, additionalClassname }) => {
  const createLinkClassname = () => {
    const baseClassname = `${styles.link}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <a href={href} className={createLinkClassname()}>
      {children}
    </a>
  );
};
