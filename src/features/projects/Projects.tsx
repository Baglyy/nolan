import { profile, projects, SECTION_IDS } from '@/content';
import { Button, Reveal, Section, SectionHeading } from '@/shared/ui';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import styles from './Projects.module.css';
import { useProjectFilter } from './useProjectFilter';

export function Projects() {
  const { filter, setFilter, visible } = useProjectFilter(projects);

  return (
    <Section id={SECTION_IDS.projects} className={styles.section}>
      <div className={styles.head}>
        <SectionHeading kicker="Projets" className={styles.heading}>
          Ce que j'ai <em>construit</em>
        </SectionHeading>
        <ProjectFilters value={filter} onChange={setFilter} />
      </div>

      <div className={styles.grid} aria-live="polite">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={(index % 3) * 0.1} />
        ))}
      </div>
      {visible.length === 0 && <p className={styles.empty}>Aucun projet dans cette catégorie pour l'instant.</p>}

      <Reveal className={styles.more}>
        <Button href={profile.githubRepositoriesUrl} variant="ghost" arrow target="_blank" rel="noopener noreferrer">
          Tous mes dépôts sur GitHub
        </Button>
      </Reveal>
    </Section>
  );
}
