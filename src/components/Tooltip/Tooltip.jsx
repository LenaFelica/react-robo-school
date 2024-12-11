import React from 'react';

import { TooltipIcon } from 'assets/icons';

import styles from './Tooltip.module.scss';

export const Tooltip = ({ text }) => {
  return (
    <span className={styles.tooltip}>
      <span className={styles.icon}>
        <TooltipIcon className={styles.img} />
      </span>
      <span className={styles.text}>{text}</span>
    </span>
  );
};
