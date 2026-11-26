import type { ReactNode } from 'react';
import { cx } from '@/shared/lib/cx';
import { Reveal } from './Reveal';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  kicker: string;
  /** Le titre ; utilisez `<em>` pour le mot mis en valeur. */
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ kicker, children, className }: SectionHeadingProps) {
  return (
    <Reveal className={cx(styles.head, className)}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{children}</h2>
    </Reveal>
  );
}
