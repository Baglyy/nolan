import { cx } from '@/shared/lib/cx';
import styles from './Tag.module.css';

interface TagListProps {
  items: readonly string[];
  tone?: 'green' | 'terracotta';
  /** Animation au survol de chaque étiquette. */
  interactive?: boolean;
}

export function TagList({ items, tone = 'green', interactive = false }: TagListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={cx(styles.tag, styles[tone], interactive && styles.interactive)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
