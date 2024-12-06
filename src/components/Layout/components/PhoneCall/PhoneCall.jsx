import React from 'react';

import styles from './PhoneCall.module.scss';

export const PhoneCall = () => {
  return (
    <a href="tel:88000001122" className={styles.phoneCall}>
      +7 800 000 11 22
    </a>
  );
};
