import type { Career } from './types';

export const career: Career = {
  education: [
    {
      period: "2024 – aujourd'hui",
      title: 'BUT Informatique',
      place: "IUT de Vannes (56) · Réalisation d'applications : conception, développement, validation",
    },
    {
      period: '2022 – 2024',
      title: 'Bac STI2D, spécialité SIN',
      place: 'Lycée La Providence, Montauban-de-Bretagne (35) · Obtenu en juin 2024',
    },
    {
      period: '2025 · Projet',
      title: 'Application de gestion des secouristes, JO 2030',
      place: 'SAÉ du BUT Informatique',
    },
    {
      period: '2024 · Projet',
      title: 'Serveur roleplay sur GTA',
      place: 'Modification et maintenance de scripts exploités en jeu',
    },
  ],
  experience: [
    {
      period: 'Juillet 2025',
      title: 'Gestion des rayons · Super U',
      place: 'Broons (22)',
      details: ['Mise en rayon', 'Conseil aux clients'],
    },
    {
      period: 'Juillet 2024',
      title: 'Agent de production · Mademoiselle Desserts',
      place: 'Broons (22)',
      details: ['Découpe et emballage des gâteaux'],
    },
    {
      period: 'Juillet – Août 2023',
      title: 'Collecteur de céréales (CDD) · Laguitton',
      place: "Dépôt d'Éréac (22)",
      details: ['Rénovation et gestion du dépôt', 'Accueil des clients'],
    },
  ],
  languages: [
    { name: 'Anglais', level: 'B1', percent: 60 },
    { name: 'Espagnol', level: 'A2', percent: 38 },
  ],
  hobbies: [
    { icon: '🤝', text: "Bénévole à la foire d'Éréac, chaque année depuis 2023" },
    { icon: '⚽', text: 'Football en club à Broons, de 2022 à 2024' },
  ],
};
