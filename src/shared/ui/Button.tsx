import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '@/shared/lib/cx';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'light' | 'outlineLight';

interface CommonProps {
  variant?: Variant;
  /** Ajoute une flèche animée au survol. */
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}

type LinkProps = CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };
type ActionProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: never };

/** Bouton de la charte. Rend un `<a>` si `href` est fourni, sinon un `<button>`. */
export function Button(props: LinkProps | ActionProps) {
  const { variant = 'primary', arrow = false, children, className, ...rest } = props;
  const classes = cx(styles.btn, styles[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
