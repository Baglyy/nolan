/** Construit l'URL d'un fichier de `public/` en respectant le `base` de Vite. */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
