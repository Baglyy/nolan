import { useSyncExternalStore } from 'react';

/** Suit une media query CSS et se met à jour quand elle change. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useReducedMotion = (): boolean => useMediaQuery('(prefers-reduced-motion: reduce)');
