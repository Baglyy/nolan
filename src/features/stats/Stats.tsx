import { stats, type Stat } from '@/content';
import { useCountUp } from '@/shared/hooks';
import { cx } from '@/shared/lib/cx';
import { useReveal } from '@/shared/ui';
import styles from './Stats.module.css';

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <li className={styles.stat}>
      <b className={styles.value}>
        <span>{value}</span>
        {stat.suffix && <em className={styles.suffix}>{stat.suffix}</em>}
      </b>
      <span className={styles.label}>{stat.label}</span>
    </li>
  );
}

/** Chiffres clés qui s'incrémentent quand le bandeau apparaît. */
export function Stats() {
  const [revealRef, reveal] = useReveal<HTMLUListElement>();
  return (
    <div className={styles.stats}>
      <div className="wrap">
        <ul ref={revealRef} className={cx(styles.grid, reveal.className)} aria-label="Chiffres clés">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={reveal.inView} />
          ))}
        </ul>
      </div>
    </div>
  );
}
