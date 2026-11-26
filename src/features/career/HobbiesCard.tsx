import type { Hobby } from '@/content';
import { Reveal } from '@/shared/ui';
import { cx } from '@/shared/lib/cx';
import styles from './Sidebar.module.css';

export function HobbiesCard({ hobbies }: { hobbies: readonly Hobby[] }) {
  return (
    <Reveal delay={0.2} className={cx(styles.card)}>
      <h3>Engagement &amp; loisirs</h3>
      <ul className={styles.hobbies}>
        {hobbies.map((hobby) => (
          <li key={hobby.text}>
            <span aria-hidden="true">{hobby.icon}</span>
            {hobby.text}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
