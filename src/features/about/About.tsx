import { SECTION_IDS, skillGroups, values } from '@/content';
import { Reveal, Section, SectionHeading, TagList } from '@/shared/ui';
import styles from './About.module.css';

const STAGGER = 0.12;

export function About() {
  return (
    <Section id={SECTION_IDS.about}>
      <SectionHeading kicker="À propos">
        Du besoin à <em>l'application</em>
      </SectionHeading>

      <Reveal as="p" className={styles.intro}>
        Après un <mark>Bac STI2D spécialité SIN</mark>, je me suis lancé dans le <mark>BUT Informatique</mark>, parcours
        réalisation d'applications. J'aime les projets complets, de la modélisation jusqu'aux tests.
      </Reveal>

      <div className={styles.values}>
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * STAGGER}>
            <article className={styles.value}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.icon} aria-hidden="true">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className={styles.skills}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.08}>
            <strong className={styles.groupName}>{group.name}</strong>
            <TagList items={group.items} interactive />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
