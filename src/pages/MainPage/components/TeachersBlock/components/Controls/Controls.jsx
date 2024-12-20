import React from 'react';
import { ArrowLeftIcon } from 'assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'assets/icons/ArrowRightIcon';
import styles from './Controls.module.scss';

export const Controls = ({
  onArrowClick,
  thumbPosition,
  thumbWidth,
  scrollbarRef,
  thumbRef,
}) => (
  <div className={styles.controls}>
    <div className={styles.scrollbar} ref={scrollbarRef}>
      <div
        className={styles.thumb}
        ref={thumbRef}
        style={{
          left: `${thumbPosition}px`,
          width: `${thumbWidth}%`,
        }}
      ></div>
    </div>
    <div className={styles.nav}>
      <button className={styles.btn} onClick={() => onArrowClick('left')}>
        <ArrowLeftIcon />
      </button>
      <button className={styles.btn} onClick={() => onArrowClick('right')}>
        <ArrowRightIcon />
      </button>
    </div>
  </div>
);
