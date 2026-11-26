import type { ReactNode } from 'react';
import { cx } from '@/shared/lib/cx';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Bloc de page standard : ancre de navigation, espacement vertical et conteneur centré. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cx(styles.section, className)}>
      <div className="wrap">{children}</div>
    </section>
  );
}
