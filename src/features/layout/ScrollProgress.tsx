import styles from './ScrollProgress.module.css';

/** Barre fine en haut de page qui suit l'avancement du défilement. */
export function ScrollProgress({ progress }: { progress: number }) {
  return <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
