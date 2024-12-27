import React from 'react';

import styles from './Scrollbar.module.scss';

export const Scrollbar = ({
  scrollbarRef,
  thumbRef,
  handleThumbMouseDown,
  handleThumbMouseUp,
  scrollbarState,
}) => {
  const thumbStyle = {
    left: `${scrollbarState.leftPosition}px`,
    width: `${scrollbarState.width}%`,
    cursor: scrollbarState.isMoving ? 'grabbing' : 'grab',
  };
  return (
    <div className={styles.scrollbar} ref={scrollbarRef}>
      <div
        className={styles.thumb}
        ref={thumbRef}
        onMouseDown={handleThumbMouseDown}
        onMouseUp={handleThumbMouseUp}
        style={thumbStyle}
      />
    </div>
  );
};
