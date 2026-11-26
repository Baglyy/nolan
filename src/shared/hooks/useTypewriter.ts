import { useEffect, useState } from 'react';
import { useReducedMotion } from './useMediaQuery';

interface Options {
  typeDelay?: number;
  deleteDelay?: number;
  holdDelay?: number;
  startDelay?: number;
}

/**
 * Fait défiler une liste de mots avec un effet machine à écrire.
 * Le premier mot est affiché en entier au départ, puis effacé.
 */
export function useTypewriter(
  words: readonly string[],
  { typeDelay = 70, deleteDelay = 35, holdDelay = 1800, startDelay = 2200 }: Options = {},
): string {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    if (reduce || words.length === 0) return;
    let wordIndex = 0;
    let length = words[0]?.length ?? 0;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex] ?? '';
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));

      let delay = deleting ? deleteDelay : typeDelay;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = holdDelay;
      } else if (deleting && length === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [words, reduce, typeDelay, deleteDelay, holdDelay, startDelay]);

  return text;
}
