import { useEffect, useState } from 'react';
import type { TimelineEntry } from '@/content';
import { cx } from '@/shared/lib/cx';
import styles from './Timeline.module.css';

interface TimelineProps {
  entries: readonly TimelineEntry[];
  /** Déclenche le remplissage animé de la ligne verticale. */
  animate: boolean;
}

export function Timeline({ entries, animate }: TimelineProps) {
  // Le remplissage part de 0 à chaque montage (changement d'onglet), puis se remplit.
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => setFilled(true), 50);
    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <ol className={styles.timeline}>
      <span className={cx(styles.fill, filled && styles.filled)} aria-hidden="true" />
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.title}`} className={styles.item}>
          <span className={styles.period}>{entry.period}</span>
          <h3 className={styles.title}>{entry.title}</h3>
          <div className={styles.place}>{entry.place}</div>
          {entry.details && (
            <ul className={styles.details}>
              {entry.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
