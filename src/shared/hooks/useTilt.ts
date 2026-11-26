import { useCallback, type MouseEvent } from 'react';
import { useMediaQuery, useReducedMotion } from './useMediaQuery';

/**
 * Effet d'inclinaison 3D + halo lumineux qui suit la souris.
 * Écrit directement le style (pas de re-render à chaque mouvement).
 */
export function useTilt<T extends HTMLElement>(strength = 6) {
  const reduce = useReducedMotion();
  const canHover = useMediaQuery('(hover: hover)');
  const enabled = canHover && !reduce;

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      if (!enabled) return;
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * strength}deg) rotateY(${(x - 0.5) * strength}deg) translateY(-6px)`;
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
    },
    [enabled, strength],
  );

  const onMouseLeave = useCallback((event: MouseEvent<T>) => {
    event.currentTarget.style.transform = '';
  }, []);

  return { onMouseMove, onMouseLeave };
}
