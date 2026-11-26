import { useEffect, useState } from 'react';
import { useReducedMotion } from './useMediaQuery';

const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

/** Anime un nombre de 0 à `target` une fois que `active` passe à true. */
export function useCountUp(target: number, active: boolean, duration = 1400): number {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || reduce) return;
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduce]);

  if (reduce) return active ? target : 0;
  return value;
}
