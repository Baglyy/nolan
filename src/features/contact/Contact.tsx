import { profile, SECTION_IDS } from '@/content';
import { useClipboard } from '@/shared/hooks';
import { ExternalLink, GitHubIcon, LinkedInIcon, Reveal, Section, Toast } from '@/shared/ui';
import styles from './Contact.module.css';

export function Contact() {
  const { copied, copy } = useClipboard();
  const { linkedin, github } = profile.socials;

  return (
    <Section id={SECTION_IDS.contact} className={styles.section}>
      <Reveal className={styles.card}>
        <span className={styles.kicker}>Contact</span>
        <h2 className={styles.title}>Travaillons ensemble</h2>
        <p className={styles.text}>Je suis à l'écoute et je réponds rapidement.</p>

        <a className={styles.mail} href={`mailto:${profile.email}`}>
          <span aria-hidden="true">✉️</span> {profile.email}
        </a>
        <button type="button" className={styles.copy} onClick={() => void copy(profile.email)}>
          Copier l'adresse
        </button>

        <div className={styles.socials}>
          <ExternalLink className={styles.social} href={linkedin.href}>
            <LinkedInIcon />
            {linkedin.label}
          </ExternalLink>
          <ExternalLink className={styles.social} href={github.href}>
            <GitHubIcon />
            {github.label}
          </ExternalLink>
        </div>
      </Reveal>
      <Toast visible={copied} message="Adresse copiée ✓" />
    </Section>
  );
}
