/**
 * Modèle de contenu du portfolio.
 * Toutes les données affichées sont décrites ici : les composants
 * ne contiennent aucun texte « métier » en dur.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Badge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Profile {
  firstName: string;
  fullName: string;
  status: string;
  greeting: string;
  /** Début de la phrase animée : « Je développe … » */
  taglinePrefix: string;
  /** Fins de phrase qui défilent avec l'effet machine à écrire. */
  taglineWords: readonly string[];
  lead: string;
  photo: { src: string; alt: string };
  badges: readonly [Badge, ...Badge[]];
  email: string;
  cvUrl: string;
  socials: {
    linkedin: Link;
    github: Link;
  };
  githubRepositoriesUrl: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Value {
  icon: string;
  title: string;
  text: string;
}

export interface SkillGroup {
  name: string;
  items: readonly string[];
}

/** Catégories utilisées par les filtres de projets. */
export type ProjectCategory = 'java' | 'web';

export interface Language {
  name: string;
  /** Couleur GitHub du langage. */
  color: string;
}

/** Dégradés de la charte, réutilisés pour l'en-tête des cartes. */
export type ProjectTone = 'forest' | 'sand' | 'sage' | 'blush' | 'terracotta';

export interface Project {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  category: ProjectCategory;
  language: Language;
  tags: readonly string[];
  repoUrl: string;
  tone: ProjectTone;
  featured?: boolean;
}

export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  details?: readonly string[];
}

export interface SpokenLanguage {
  name: string;
  level: string;
  /** Pourcentage de remplissage de la barre (0-100). */
  percent: number;
}

export interface Hobby {
  icon: string;
  text: string;
}

export interface Career {
  education: readonly TimelineEntry[];
  experience: readonly TimelineEntry[];
  languages: readonly SpokenLanguage[];
  hobbies: readonly Hobby[];
}
