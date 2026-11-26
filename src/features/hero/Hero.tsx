import { profile, SECTION_IDS } from '@/content';
import { useTypewriter } from '@/shared/hooks';
import { cx } from '@/shared/lib/cx';
import { Button, DownloadIcon, Reveal } from '@/shared/ui';
import styles from './Hero.module.css';
import { Portrait } from './Portrait';

export function Hero() {
  const word = useTypewriter(profile.taglineWords);

  return (
    <section className={styles.hero}>
      <div className={cx(styles.blob, styles.blob1)} aria-hidden="true" />
      <div className={cx(styles.blob, styles.blob2)} aria-hidden="true" />
      <div className={cx(styles.blob, styles.blob3)} aria-hidden="true" />

      <div className={cx('wrap', styles.grid)}>
        <div>
          <Reveal className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.status}
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className={styles.title}>
              {profile.greeting}
              <br />
              <span className={styles.name}>{profile.fullName}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className={styles.tagline}>
            {profile.taglinePrefix}{' '}
            <b className={styles.word} aria-live="off">
              {word}
            </b>
          </Reveal>
          <Reveal as="p" delay={0.3} className={styles.lead}>
            {profile.lead}
          </Reveal>
          <Reveal delay={0.4} className={styles.actions}>
            <Button href={`#${SECTION_IDS.projects}`} arrow>
              Voir mes projets
            </Button>
            <Button href={profile.cvUrl} variant="ghost" download>
              <DownloadIcon />
              Mon CV
            </Button>
          </Reveal>
        </div>
        <Portrait photo={profile.photo} badges={profile.badges} />
      </div>
    </section>
  );
}
