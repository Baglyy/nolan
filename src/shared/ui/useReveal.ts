import { useInView } from '@/shared/hooks';
import { cssVars } from '@/shared/lib/cssVars';
import { cx } from '@/shared/lib/cx';
import styles from './Reveal.module.css';

/**
 * Apparition au défilement, applicable à n'importe quel élément :
 *
 *   const [ref, reveal] = useReveal<HTMLAnchorElement>(0.1);
 *   <a ref={ref} className={cx(styles.card, reveal.className)} style={reveal.style} />
 *
 * `delay` est en secondes. La ref est séparée des valeurs de rendu (règle react-hooks/refs).
 */
export function useReveal<T extends Element>(delay = 0) {
  const [ref, inView] = useInView<T>();
  const reveal = {
    inView,
    className: cx(styles.reveal, inView && styles.visible),
    style: delay ? cssVars({ '--d': `${delay}s` }) : undefined,
  };
  return [ref, reveal] as const;
}
