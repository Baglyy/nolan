import type { Language, Project, ProjectCategory } from './types';

const JAVA: Language = { name: 'Java', color: '#b07219' };
const TYPESCRIPT: Language = { name: 'TypeScript', color: '#c9a227' };
const VUE: Language = { name: 'Vue', color: '#41b883' };
const CSS: Language = { name: 'CSS', color: '#663399' };

export const projectFilters: ReadonlyArray<{ id: ProjectCategory | 'all'; label: string }> = [
  { id: 'all', label: 'Tous' },
  { id: 'java', label: 'Java' },
  { id: 'web', label: 'Web' },
];

export const projects: readonly Project[] = [
  {
    slug: 'application-secouristes',
    title: "Application Secouristes · JO d'hiver 2030",
    description: "Gestion des secouristes bénévoles des Jeux Olympiques d'hiver 2030. Projet d'équipe mené en SAÉ du BUT.",
    emoji: '⛷️',
    category: 'java',
    language: JAVA,
    tags: ['Java', 'UML', 'Travail en équipe'],
    repoUrl: 'https://github.com/Baglyy/Application-Secouristes',
    tone: 'forest',
    featured: true,
  },
  {
    slug: 'mongolingo',
    title: 'Mongolingo',
    description: 'Apprendre MongoDB de façon ludique, sur le principe de Duolingo.',
    emoji: '🍃',
    category: 'web',
    language: TYPESCRIPT,
    tags: ['React', 'MongoDB'],
    repoUrl: 'https://github.com/Baglyy/Mongolingo',
    tone: 'sand',
  },
  {
    slug: 'todo',
    title: 'Todo',
    description: 'Une liste de tâches pour organiser son quotidien.',
    emoji: '📝',
    category: 'web',
    language: VUE,
    tags: ['Vue.js', 'TypeScript'],
    repoUrl: 'https://github.com/Baglyy/Todo',
    tone: 'sage',
  },
  {
    slug: 'meteo',
    title: 'Météo',
    description: "La météo d'une ville en un coup d'œil, sur ordinateur comme sur mobile.",
    emoji: '⛅',
    category: 'web',
    language: CSS,
    tags: ['HTML / CSS', 'Responsive'],
    repoUrl: 'https://github.com/Baglyy/Meteo',
    tone: 'blush',
  },
  {
    slug: 'jeu-de-marienbad',
    title: 'Jeu de Marienbad',
    description: 'Le jeu de stratégie de Marienbad, une variante du jeu de Nim, codé en Java.',
    emoji: '🎲',
    category: 'java',
    language: JAVA,
    tags: ['Java', 'Algorithmique'],
    repoUrl: 'https://github.com/Baglyy/Jeu-de-Marienbad',
    tone: 'terracotta',
  },
];
