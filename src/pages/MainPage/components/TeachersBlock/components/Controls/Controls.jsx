import React from 'react';

import { ArrowLeftIcon } from 'assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'assets/icons/ArrowRightIcon';

import { Scrollbar } from '../Scrollbar';

import styles from './Controls.module.scss';

export const Controls = ({
  scrollbarRef,
  thumbRef,
  handleThumbMouseDown,
  handleThumbMouseUp,
  scrollbarState,
  handleLeftArrowClick,
  handleRightArrowClick,
}) => {
  return (
    <div className={styles.controls}>
      <Scrollbar
        scrollbarRef={scrollbarRef}
        thumbRef={thumbRef}
        handleThumbMouseDown={handleThumbMouseDown}
        handleThumbMouseUp={handleThumbMouseUp}
        scrollbarState={scrollbarState}
      />

      <div className={styles.nav}>
        <button className={styles.btn} onClick={handleLeftArrowClick}>
          <ArrowLeftIcon />
        </button>
        <button className={styles.btn} onClick={handleRightArrowClick}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
