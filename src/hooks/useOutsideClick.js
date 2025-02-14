import { useEffect } from 'react';

export const useOutsideClick = ({
  ref,
  handler,
  condition,
  exceptElementRef,
}) => {
  useEffect(() => {
    if (!condition) {
      return;
    }

    const listener = (event) => {
      if (!event.target) return;

      const el = ref?.current;
      const exceptEl = exceptElementRef?.current;
      const hasElTarget = el && el?.contains(event?.target || null);
      const hasExceptElTarget =
        exceptEl && exceptEl?.contains(event?.target || null);

      if (!el || hasElTarget || (exceptEl && hasExceptElTarget)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, condition]);
};
