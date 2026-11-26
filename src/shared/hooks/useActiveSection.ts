import { useEffect, useState } from 'react';

/**
 * Renvoie l'id de la dernière section dont le haut a dépassé
 * `offset` (fraction de la hauteur de la fenêtre), pour surligner le lien de navigation.
 */
export function useActiveSection(ids: readonly string[], offset = 0.4): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current: string | null = null;
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight * offset) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids, offset]);

  return active;
}
