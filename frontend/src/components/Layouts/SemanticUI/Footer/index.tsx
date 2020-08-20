import React from 'react';
import styles from './styles.scss';
import { AppLink } from '@components/AppLink';

interface Props {}

export const Footer = (props: Props): JSX.Element => {
  return (
    <footer>
      <nav>
        <AppLink href="/">
          <a className={styles.item}>Home</a>
        </AppLink>
        <AppLink href="/about">
          <a className={styles.item}>Home</a>
        </AppLink>
        <AppLink href="/contact">
          <a className={styles.item}>Home</a>
        </AppLink>
      </nav>
      <div>Socials</div>
    </footer>
  );
};
