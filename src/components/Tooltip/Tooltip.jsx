import React from 'react';
import { TooltipIcon } from 'assets/icons';

import styles from './Tooltip.module.scss';

export const Tooltip = ({ text, icon: IconComponent = TooltipIcon }) => {
  return (
    <span className={styles.tooltip}>
      <span className={styles.icon}>
        <IconComponent className={styles.img} />
      </span>
      <span className={styles.text}>{text}</span>
    </span>
  );
};
