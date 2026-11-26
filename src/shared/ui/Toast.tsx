import { cx } from '@/shared/lib/cx';
import styles from './Toast.module.css';

interface ToastProps {
  visible: boolean;
  message: string;
}

/** Petite notification en bas de l'écran, annoncée aux lecteurs d'écran. */
export function Toast({ visible, message }: ToastProps) {
  return (
    <div className={cx(styles.toast, visible && styles.visible)} role="status" aria-live="polite">
      {visible ? message : ''}
    </div>
  );
}
