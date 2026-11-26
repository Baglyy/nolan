import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}

/** Fenêtre modale accessible : Échap, clic sur le fond, focus sur « Fermer », scroll bloqué. */
export function Modal({ open, onClose, label, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className={styles.sheet}>
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Fermer">
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
