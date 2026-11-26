import type { Project, ProjectCategory } from '@/content';

export type ProjectFilter = ProjectCategory | 'all';

/** Fonction pure, testée unitairement : garde les projets de la catégorie choisie. */
export const filterProjects = (projects: readonly Project[], filter: ProjectFilter): readonly Project[] =>
  filter === 'all' ? projects : projects.filter((project) => project.category === filter);
