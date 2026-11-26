import { projectFilters } from '@/content';
import { cx } from '@/shared/lib/cx';
import { Reveal } from '@/shared/ui';
import type { ProjectFilter } from './filterProjects';
import styles from './ProjectFilters.module.css';

interface ProjectFiltersProps {
  value: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ value, onChange }: ProjectFiltersProps) {
  return (
    <Reveal>
      <div className={styles.filters} role="group" aria-label="Filtrer les projets">
        {projectFilters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={cx(styles.button, value === id && styles.active)}
            aria-pressed={value === id}
            onClick={() => onChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </Reveal>
  );
}
