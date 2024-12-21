// src/teachers/TeachersBlock.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'components/Container';
import { TeacherItem } from './components/TeacherItem';
import { Controls } from './components/Controls';

import teachers from 'api/teachers.json';

import irina from 'assets/images/irina.png';
import marina from 'assets/images/marina.png';
import maxim from 'assets/images/maxim.png';
import konstantin from 'assets/images/konstantin.png';
import lisa from 'assets/images/lisa.png';

import styles from './TeachersBlock.module.scss';

const imagesMap = {
  irina,
  marina,
  maxim,
  konstantin,
  lisa,
};

export const TeachersBlock = () => {
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const scrollbarRef = useRef(null);

  const [sliderMaxScrollLeft, setSliderMaxScrollLeft] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);

  const updateSlider = () => {
    if (!sliderRef.current || !scrollbarRef.current) return;

    const sliderWidth = sliderRef.current.clientWidth;
    const sliderScrollWidth = sliderRef.current.scrollWidth;

    setSliderMaxScrollLeft(sliderScrollWidth - sliderWidth);

    const newThumbWidth = (sliderWidth / sliderScrollWidth) * 100;
    setThumbWidth(newThumbWidth);
  };

  const handleSliderScroll = () => {
    if (!sliderRef.current || !scrollbarRef.current) return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const maxThumbPosition =
      scrollbarRef.current.clientWidth -
      (thumbWidth / 100) * scrollbarRef.current.clientWidth;

    const newThumbPosition =
      (scrollPosition / sliderMaxScrollLeft) * maxThumbPosition;

    setThumbPosition(newThumbPosition);
  };

  const handleArrowClick = (direction) => {
    const scrollAmount =
      direction === 'left'
        ? -sliderRef.current.clientWidth
        : sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleThumbDrag = (e) => {
    if (!thumbRef.current || !scrollbarRef.current || !sliderRef.current)
      return;

    const startX = e.clientX;
    const thumbPositionStart = thumbRef.current.offsetLeft;
    const thumbWidthPx = (thumbWidth / 100) * scrollbarRef.current.clientWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const maxThumbPosition = scrollbarRef.current.clientWidth - thumbWidthPx;
      const newThumbPosition = Math.max(
        0,
        Math.min(maxThumbPosition, thumbPositionStart + deltaX),
      );
      setThumbPosition(newThumbPosition);

      const scrollPosition =
        (newThumbPosition / maxThumbPosition) * sliderMaxScrollLeft;
      sliderRef.current.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      thumbRef.current.style.cursor = 'grab';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    thumbRef.current.style.cursor = 'grabbing';
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    updateSlider();

    window.addEventListener('resize', updateSlider);

    sliderRef.current.addEventListener('scroll', handleSliderScroll);

    return () => {
      window.removeEventListener('resize', updateSlider);
      sliderRef.current.removeEventListener('scroll', handleSliderScroll);
    };
  }, [sliderMaxScrollLeft, thumbWidth]);

  useEffect(() => {
    if (!thumbRef.current) return;

    thumbRef.current.addEventListener('mousedown', handleThumbDrag);

    return () => {
      if (thumbRef.current) {
        thumbRef.current.removeEventListener('mousedown', handleThumbDrag);
      }
    };
  }, [thumbWidth, sliderMaxScrollLeft]);

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <div className={styles.list} ref={sliderRef}>
            {teachers.map((teacher) => (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                imagesMap={imagesMap}
              />
            ))}
          </div>
          <Controls
            onArrowClick={handleArrowClick}
            thumbPosition={thumbPosition}
            thumbWidth={thumbWidth}
            scrollbarRef={scrollbarRef}
            thumbRef={thumbRef}
          />
        </div>
      </Container>
    </section>
  );
};
