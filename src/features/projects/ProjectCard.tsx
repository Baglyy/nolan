import type { Project } from '@/content';
import { useTilt } from '@/shared/hooks';
import { cx } from '@/shared/lib/cx';
import { ExternalLink, TagList, useReveal } from '@/shared/ui';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [revealRef, reveal] = useReveal<HTMLAnchorElement>(delay);
  const tilt = useTilt<HTMLAnchorElement>();

  return (
    <ExternalLink
      ref={revealRef}
      href={project.repoUrl}
      className={cx(styles.card, project.featured && styles.featured, reveal.className)}
      style={reveal.style}
      aria-label={`${project.title}, voir le dépôt GitHub`}
      {...tilt}
    >
      <div className={cx(styles.visual, styles[project.tone])}>
        {project.featured && <span className={styles.ribbon}>Projet phare</span>}
        <span className={styles.emoji} aria-hidden="true">
          {project.emoji}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.language}>
            <i className={styles.languageDot} style={{ background: project.language.color }} />
            {project.language.name}
          </span>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <TagList items={project.tags} tone="terracotta" />
      </div>
    </ExternalLink>
  );
}
