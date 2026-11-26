import type { SkillGroup, Stat, Value } from './types';

export const stats: readonly Stat[] = [
  { value: 5, label: 'projets sur GitHub' },
  { value: 20, suffix: '+', label: 'technologies utilisées' },
  { value: 3, suffix: 'e', label: 'année de BUT' },
  { value: 2, label: 'langues étrangères' },
];

export const marqueeTechnologies: readonly string[] = [
  'Java', 'React', 'TypeScript', 'Vue.js', 'Python', 'Go', 'MongoDB', 'SQL', 'Docker', 'UML',
];

export const values: readonly Value[] = [
  { icon: '✏️', title: 'Concevoir', text: "Analyser le besoin, modéliser en UML et penser l'interface pour l'utilisateur." },
  { icon: '⚙️', title: 'Développer', text: 'Du Java pour le logiciel, React et Vue.js pour le web, SQL et MongoDB pour les données.' },
  { icon: '✅', title: 'Valider', text: 'Tester, corriger et maintenir pour livrer un outil fiable sur la durée.' },
];

export const skillGroups: readonly SkillGroup[] = [
  { name: 'Langages', items: ['Java', 'Python', 'Go', 'Node.js', 'TypeScript'] },
  { name: 'Web', items: ['React', 'Vue.js', 'HTML', 'CSS', 'WordPress'] },
  { name: 'Données', items: ['SQL', 'Oracle', 'MySQL', 'phpMyAdmin', 'MongoDB'] },
  { name: 'Outils', items: ['UML', 'IHM', 'GitHub', 'Docker', 'Linux', 'Windows'] },
];
