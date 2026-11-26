# Portfolio · Nolan Pécheul

Site portfolio en **React 19 + TypeScript (strict) + Vite**, fidèle à la maquette validée
(crème, vert forêt, terracotta, thème clair, sans bleu).

## Démarrer

```bash
npm install        # Node 20+ (testé avec Node 22)
npm run dev        # http://localhost:5173
npm run build      # vérifie les types puis produit dist/
npm run preview    # sert dist/ en local
npm test           # tests Vitest + Testing Library
npm run lint       # ESLint (typescript-eslint + règles des hooks React)
```

`dist/` est un site statique : il se déploie tel quel sur GitHub Pages, Netlify ou Vercel.
Pour GitHub Pages dans un sous-dossier, ajoutez `base: '/nom-du-depot/'` dans `vite.config.ts`
(les chemins de la photo et du CV suivent automatiquement grâce à `asset()`).

## Architecture

Organisation **par fonctionnalité** (feature-based), avec trois couches qui ne dépendent
que vers le bas :

```
src/
├── app/            Composition de la page (ordre des sections, état global de scroll)
├── features/       Une section du site = un dossier autonome
│   ├── layout/       Navbar, barre de progression, footer
│   ├── hero/         Accroche, machine à écrire, portrait
│   ├── stats/        Chiffres clés animés
│   ├── marquee/      Bandeau des technologies
│   ├── about/        Présentation, valeurs, compétences
│   ├── projects/     Cartes, filtres (logique pure + hook + composants)
│   ├── career/       Onglets formation / expériences, timeline, CV en modale
│   └── contact/      Mail, copie, LinkedIn, GitHub
├── content/        Données typées : TOUT le texte du site est ici
├── shared/
│   ├── hooks/        Hooks génériques (animations, scroll, presse-papiers…)
│   ├── ui/           Composants de présentation réutilisables (Button, Modal, Reveal…)
│   └── lib/          Petits utilitaires (cx, cssVars, asset)
└── styles/         Jetons de la charte (tokens.css) et styles globaux
```

**Règles de dépendance** : `app → features → shared / content`. Une feature n'importe jamais
une autre feature ; `shared` n'importe ni `features` ni `app`. Chaque feature expose un
`index.ts` (son API publique), comme un package Go ou un module Java.

**Parallèles avec Java / Go**

| Ici | Équivalent |
| --- | --- |
| `content/types.ts` | Les classes du modèle / les `struct` |
| `content/*.ts` | Des données de configuration, séparées du code |
| `features/projects/filterProjects.ts` | Une fonction de service pure, testée seule |
| `use*.ts` (hooks) | La logique avec état, injectée dans la vue |
| Composants `.tsx` | La couche présentation, sans logique métier |
| `index.ts` par feature | L'API exportée d'un package |

**Styles** : CSS Modules (un `.module.css` à côté de chaque composant), donc pas de
collision de noms. Couleurs, rayons et courbes d'animation viennent de `styles/tokens.css` :
changer la charte se fait à un seul endroit.

**Animations** : chacune est un hook isolé, qui respecte `prefers-reduced-motion`.

- `useTypewriter` : texte qui s'écrit et s'efface
- `useInView` / `useReveal` : apparition au défilement
- `useCountUp` : compteurs des chiffres clés
- `useScroll` / `useActiveSection` : barre de progression et lien actif de la nav
- `useTilt` : inclinaison 3D des cartes projets (écrit le style directement, sans re-render)
- `useClipboard` : copie de l'adresse mail avec retour visuel

## Modifier le contenu

- Ajouter un projet : une entrée dans `src/content/projects.ts`. TypeScript signale tout champ
  manquant ; les tests vérifient les slugs uniques et les liens GitHub.
- Nouvelle expérience ou formation : `src/content/career.ts`.
- Nouvelle catégorie de filtre : étendre `ProjectCategory` dans `types.ts`, puis `projectFilters`.
- Remplacer la photo ou le CV : `public/media/`.
