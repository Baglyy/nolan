import { asset } from '@/shared/lib/asset';
import type { Profile } from './types';

export const profile: Profile = {
  firstName: 'Nolan',
  fullName: 'Nolan Pécheul',
  status: 'Apprentis chez Arago',
  greeting: "Salut, moi c'est",
  taglinePrefix: 'Je développe',
  taglineWords: [
    'des applications web',
    'des logiciels en Java ou Golang',
  ],
  lead: 'Étudiant en BUT Informatique à Vannes. Je transforme un besoin concret en outil simple à utiliser.',
  photo: { src: asset('media/nolan.png'), alt: 'Portrait de Nolan Pécheul' },
  badges: [
    { icon: '🎓', title: 'BUT Informatique', subtitle: 'IUT de Vannes' },
  ],
  email: 'nolanereac@gmail.com',
  cvUrl: asset('media/CV-Nolan-Pecheul.pdf'),
  socials: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nolan-p%C3%A9cheul-59a252318/' },
    github: { label: 'GitHub', href: 'https://github.com/Baglyy' },
  },
  githubRepositoriesUrl: 'https://github.com/Baglyy?tab=repositories',
};
