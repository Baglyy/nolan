import type { SpokenLanguage } from '@/content';
import { useReveal } from '@/shared/ui';
import { cx } from '@/shared/lib/cx';
import styles from './Sidebar.module.css';

export function LanguagesCard({ languages }: { languages: readonly SpokenLanguage[] }) {
  const [revealRef, reveal] = useReveal<HTMLDivElement>(0.1);
  return (
    <div ref={revealRef} className={cx(styles.card, reveal.className)} style={reveal.style}>
      <h3>Langues</h3>
      {languages.map((language) => (
        <div key={language.name} className={styles.language}>
          <div className={styles.languageHead}>
            {language.name} <span>{language.level}</span>
          </div>
          <div
            className={styles.bar}
            role="meter"
            aria-label={`${language.name}, niveau ${language.level}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={language.percent}
          >
            <i className={styles.barFill} style={{ width: reveal.inView ? `${language.percent}%` : 0 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
