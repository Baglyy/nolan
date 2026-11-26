import { profile } from '@/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {profile.fullName}
    </footer>
  );
}
