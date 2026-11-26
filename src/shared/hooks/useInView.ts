import { useEffect, useRef, useState, type RefObject } from 'react';

interface Options {
  threshold?: number;
  /** Arrête d'observer après la première apparition (par défaut : oui). */
  once?: boolean;
}

/** Indique si un élément est entré dans la fenêtre (IntersectionObserver). */
export function useInView<T extends Element>({ threshold = 0.15, once = true }: Options = {}): [
  RefObject<T | null>,
  boolean,
] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
