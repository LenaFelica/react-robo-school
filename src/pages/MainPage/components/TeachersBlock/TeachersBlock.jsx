import React from 'react';

import { Container } from 'components/Container';
import teachers from 'api/teachers.json';

import { TeacherItem } from './components/TeacherItem';
import { Controls } from './components/Controls';
import { useSliderControls } from './hooks/useSliderControls';

import styles from './TeachersBlock.module.scss';

export const TeachersBlock = () => {
  const {
    sliderRef,
    scrollbarRef,
    thumbRef,
    handleThumbMouseDown,
    handleThumbMouseUp,
    scrollbarState,
    handleRightArrowClick,
    handleLeftArrowClick,
  } = useSliderControls();

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <div className={styles.list} ref={sliderRef}>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id} teacher={teacher} />
            ))}
          </div>
          <Controls
            handleThumbMouseDown={handleThumbMouseDown}
            handleThumbMouseUp={handleThumbMouseUp}
            scrollbarRef={scrollbarRef}
            thumbRef={thumbRef}
            scrollbarState={scrollbarState}
            handleRightArrowClick={handleRightArrowClick}
            handleLeftArrowClick={handleLeftArrowClick}
          />
        </div>
      </Container>
    </section>
  );
};
