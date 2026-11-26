/** Identifiants des ancres de section : source unique pour la nav et les sections. */
export const SECTION_IDS = {
  about: 'apropos',
  projects: 'projets',
  career: 'cv',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  id: SectionId;
  label: string;
  /** Lien mis en avant (bouton plein). */
  cta?: boolean;
}

export const navItems: readonly NavItem[] = [
  { id: SECTION_IDS.about, label: 'À propos' },
  { id: SECTION_IDS.projects, label: 'Projets' },
  { id: SECTION_IDS.career, label: 'Parcours' },
  { id: SECTION_IDS.contact, label: 'Me contacter', cta: true },
];
