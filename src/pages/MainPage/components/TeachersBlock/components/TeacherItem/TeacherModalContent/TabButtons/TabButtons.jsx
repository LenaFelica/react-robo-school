import React from 'react';

import styles from './TabButtons.module.scss';

export const TabButtons = ({ options, activeTab, handleTabChange }) => {
  const createActiveTabClassname = (name) =>
    `${styles.tabsMenuBtn} ${activeTab?.value === name ? styles.active : ''}`;

  return (
    <div className={styles.tabsMenu}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={createActiveTabClassname(option.value)}
          onClick={() => handleTabChange(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
