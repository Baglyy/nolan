import { Modal } from '@/shared/ui';
import styles from './CvModal.module.css';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
  cvUrl: string;
  ownerName: string;
}

/** Aperçu du CV en PDF. L'iframe n'est créée qu'à l'ouverture (chargement différé). */
export function CvModal({ open, onClose, cvUrl, ownerName }: CvModalProps) {
  return (
    <Modal open={open} onClose={onClose} label={`CV de ${ownerName}`}>
      <iframe className={styles.frame} src={cvUrl} title={`CV de ${ownerName}`} />
    </Modal>
  );
}
