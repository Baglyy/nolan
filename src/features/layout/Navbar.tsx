import { navItems, profile } from '@/content';
import { useActiveSection } from '@/shared/hooks';
import { cx } from '@/shared/lib/cx';
import styles from './Navbar.module.css';

const sectionIds = navItems.map((item) => item.id);

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const active = useActiveSection(sectionIds);

  return (
    <header className={cx(styles.nav, scrolled && styles.scrolled)}>
      <nav className={cx('wrap', styles.inner)} aria-label="Navigation principale">
        <a className={styles.brand} href="#top">
          {profile.firstName}
          <span>.</span>
        </a>
        <ul className={styles.links}>
          {navItems.map(({ id, label, cta }) => (
            <li key={id} className={cx(!cta && styles.secondary)}>
              <a
                href={`#${id}`}
                className={cx(styles.link, cta ? styles.cta : active === id && styles.active)}
                aria-current={!cta && active === id ? 'location' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
