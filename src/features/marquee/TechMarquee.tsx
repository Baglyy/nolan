import { marqueeTechnologies } from '@/content';
import styles from './TechMarquee.module.css';

/** Bandeau défilant des technologies. La liste est doublée pour boucler sans saut. */
export function TechMarquee() {
  const loop = [...marqueeTechnologies, ...marqueeTechnologies];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {loop.map((tech, index) => (
          <span key={`${tech}-${index}`} className={styles.item}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
