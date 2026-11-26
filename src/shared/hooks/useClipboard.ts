import { useCallback, useEffect, useRef, useState } from 'react';

/** Copie un texte et expose un état « copié » qui retombe après `resetAfter` ms. */
export function useClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator.clipboard) return false;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        return false;
      }
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), resetAfter);
      return true;
    },
    [resetAfter],
  );

  return { copied, copy };
}
