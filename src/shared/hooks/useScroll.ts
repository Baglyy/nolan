import { useEffect, useState } from 'react';

interface ScrollState {
  /** Position verticale en pixels. */
  y: number;
  /** Avancement dans la page, entre 0 et 1. */
  progress: number;
}

const read = (): ScrollState => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return { y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 };
};

/** Position de défilement de la page, regroupée par frame d'animation. */
export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({ y: 0, progress: 0 });

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setState(read()));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return state;
}
