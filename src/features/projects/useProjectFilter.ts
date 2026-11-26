import { useMemo, useState } from 'react';
import type { Project } from '@/content';
import { filterProjects, type ProjectFilter } from './filterProjects';

export function useProjectFilter(projects: readonly Project[], initial: ProjectFilter = 'all') {
  const [filter, setFilter] = useState<ProjectFilter>(initial);
  const visible = useMemo(() => filterProjects(projects, filter), [projects, filter]);
  return { filter, setFilter, visible };
}
