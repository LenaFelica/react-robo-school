import React, { useEffect, useRef, useState } from 'react';

import { Container } from 'components/Container';
import { Button } from 'components/Button';

import teachers from 'api/teachers.json';

import irina from 'assets/images/irina.png';
import marina from 'assets/images/marina.png';
import maxim from 'assets/images/maxim.png';
import konstantin from 'assets/images/konstantin.png';
import lisa from 'assets/images/lisa.png';
import { ArrowLeftIcon } from 'assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from 'assets/icons/ArrowRightIcon';

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

    if (sliderRef.current && thumbRef.current && scrollbarRef.current) {
      const sliderWidth = sliderRef.current.clientWidth;
      const sliderScrollWidth = sliderRef.current.scrollWidth;

      setSliderMaxScrollLeft(sliderScrollWidth - sliderWidth);

      const newThumbWidth = (sliderWidth / sliderScrollWidth) * 100;
      setThumbWidth(newThumbWidth);
    }
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
              <div className={styles.item} key={teacher.id}>
                <img
                  className={styles.img}
                  src={imagesMap[teacher.alt]}
                  alt={teacher.name}
                />
                <div className={styles.text}>
                  <div className={styles.name}>{teacher.name}</div>
                  <div className={styles.description}>{teacher.desc}</div>
                  <Button className={styles.btn} variant="link">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
              <button
                className={styles.btn}
                onClick={() => handleArrowClick('left')}
              >
                <ArrowLeftIcon />
              </button>
              <button
                className={styles.btn}
                onClick={() => handleArrowClick('right')}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
