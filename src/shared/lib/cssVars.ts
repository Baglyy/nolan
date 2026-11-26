import type { CSSProperties } from 'react';

/** Permet de passer des variables CSS (`--d`, `--mx`…) en style inline, typées. */
export const cssVars = (vars: Record<`--${string}`, string | number>): CSSProperties => vars as CSSProperties;
