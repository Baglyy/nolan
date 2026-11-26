import type { ReactNode } from 'react';
import { cx } from '@/shared/lib/cx';
import { useReveal } from './useReveal';

interface RevealProps {
  children: ReactNode;
  /** Délai d'apparition en secondes, pour décaler des éléments voisins. */
  delay?: number;
  className?: string;
  as?: 'div' | 'p' | 'span';
}

/** Fait apparaître son contenu en fondu quand il entre à l'écran. */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const [revealRef, reveal] = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={revealRef} className={cx(reveal.className, className)} style={reveal.style}>
      {children}
    </Tag>
  );
}
