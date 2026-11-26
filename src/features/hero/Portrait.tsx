import type { Badge, Profile } from '@/content';
import { useReveal } from '@/shared/ui';
import { cx } from '@/shared/lib/cx';
import styles from './Portrait.module.css';

function FloatingBadge({ badge, className }: { badge: Badge; className?: string | undefined }) {
  return (
    <div className={cx(styles.badge, className)}>
      <span className={styles.badgeIcon} aria-hidden="true">
        {badge.icon}
      </span>
      <div>
        {badge.title}
        <small>{badge.subtitle}</small>
      </div>
    </div>
  );
}

export function Portrait({ photo, badges }: Pick<Profile, 'photo' | 'badges'>) {
  const [revealRef, reveal] = useReveal<HTMLDivElement>(0.2);
  const [top] = badges;

  // Le flottement est sur un élément interne : il ne doit pas écraser
  // la transformation utilisée par l'apparition au défilement.
  return (
    <div ref={revealRef} className={cx(styles.portrait, reveal.className)} style={reveal.style}>
      <div className={styles.floating}>
        <div className={styles.frame}>
          <img className={styles.photo} src={photo.src} alt={photo.alt} width={320} height={320} />
        </div>
        <FloatingBadge badge={top} className={styles.badgeTop} />
      </div>
    </div>
  );
}
