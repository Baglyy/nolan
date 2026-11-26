import { Button, Reveal } from '@/shared/ui';
import styles from './Sidebar.module.css';

interface CvDownloadCardProps {
  cvUrl: string;
  onOpen: () => void;
}

export function CvDownloadCard({ cvUrl, onOpen }: CvDownloadCardProps) {
  return (
    <Reveal className={styles.download}>
      <h3>Mon CV complet</h3>
      <p>Format PDF, une page</p>
      <div className={styles.row}>
        <Button variant="light" onClick={onOpen}>
          Afficher
        </Button>
        <Button variant="outlineLight" href={cvUrl} download>
          Télécharger
        </Button>
      </div>
    </Reveal>
  );
}
