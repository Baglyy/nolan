import type { ComponentProps } from 'react';

/** Lien qui s'ouvre dans un nouvel onglet, sans exposer `window.opener`. */
export function ExternalLink(props: ComponentProps<'a'>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
