import { useEffect, useRef, useState } from 'react';

export const useSliderControls = () => {
  const [scrollbarThumb, setScrollbarThumb] = useState({
    leftPosition: 0,
    width: 0,
    isMoving: false,
    mouseDownParams: {
      startX: 0,
      thumbPosition: 0,
      thumbWidthPx: 0,
    },
  });

  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const scrollbarRef = useRef(null);

  const calculateThumbWidth = (sliderRef) => {
    if (!sliderRef.current) {
      return 0;
    }

    return (
      (sliderRef.current.clientWidth / sliderRef.current.scrollWidth) * 100
    );
  };

  const getSliderMaxScroll = () => {
    if (!sliderRef.current) {
      return 0;
    }

    return sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
  };

  const updateThumbPosition = () => {
    const isElementsMissing =
      !sliderRef.current || !scrollbarRef.current || !thumbRef.current;
    if (isElementsMissing) {
      return;
    }
    const scrollPosition = sliderRef.current.scrollLeft;
    const newThumbPosition =
      (scrollPosition / getSliderMaxScroll()) *
      (scrollbarRef.current.clientWidth - thumbRef.current.offsetWidth);

    setScrollbarThumb((prevState) => {
      return {
        ...prevState,
        leftPosition: newThumbPosition,
      };
    });
  };

  useEffect(() => {
    if (!sliderRef.current || !thumbRef.current) {
      return;
    }

    setScrollbarThumb((prevState) => {
      return {
        ...prevState,
        width: calculateThumbWidth(sliderRef),
      };
    });

    sliderRef.current.addEventListener('scroll', updateThumbPosition);

    return () => {
      sliderRef.current.removeEventListener('scroll', updateThumbPosition);
    };
  }, [sliderRef, thumbRef]);

  const handleThumbMouseDown = (event) => {
    const startX = event.clientX;
    const thumbPosition = thumbRef.current.offsetLeft;

    setScrollbarThumb((prevState) => {
      return {
        ...prevState,
        isMoving: true,
        mouseDownParams: {
          startX,
          thumbPosition,
        },
      };
    });
  };

  const handleThumbMouseMove = (event) => {
    const isParamsOrElementsMissing =
      !scrollbarThumb.mouseDownParams ||
      !thumbRef.current ||
      !scrollbarRef.current;

    if (isParamsOrElementsMissing) {
      return;
    }

    const deltaX = event.clientX - scrollbarThumb.mouseDownParams.startX;
    const newThumbPosition =
      scrollbarThumb.mouseDownParams.thumbPosition + deltaX;
    const maxThumbPosition =
      scrollbarRef.current.getBoundingClientRect().width -
      thumbRef.current.offsetWidth;

    const boundedPosition = Math.max(
      0,
      Math.min(maxThumbPosition, newThumbPosition),
    );

    const scrollPosition =
      (boundedPosition / maxThumbPosition) * getSliderMaxScroll();

    setScrollbarThumb((prevState) => {
      return {
        ...prevState,
        leftPosition: boundedPosition,
      };
    });
    sliderRef.current.scrollLeft = scrollPosition;
  };

  const handleThumbMouseUp = () => {
    setScrollbarThumb((prevState) => {
      return {
        ...prevState,
        isMoving: false,
      };
    });

    document.removeEventListener('mousemove', handleThumbMouseMove);
    document.removeEventListener('mouseup', handleThumbMouseUp);
  };

  useEffect(() => {
    if (!scrollbarThumb.isMoving) {
      return;
    }

    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleThumbMouseUp);
  }, [scrollbarThumb.isMoving]);

  const createArrowClickHandler = (arrowDirection) => {
    if (!sliderRef.current) {
      return;
    }
    const scrollAmount =
      arrowDirection === 'left'
        ? -sliderRef.current.clientWidth
        : sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleLeftArrowClick = () => {
    createArrowClickHandler('left');
  };

  const handleRightArrowClick = () => {
    createArrowClickHandler('right');
  };

  return {
    sliderRef,
    scrollbarRef,
    thumbRef,
    handleThumbMouseDown,
    handleThumbMouseUp,
    scrollbarState: scrollbarThumb,
    handleRightArrowClick,
    handleLeftArrowClick,
  };
};
