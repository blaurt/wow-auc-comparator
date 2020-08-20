import React from 'react';
import cl from 'classnames';

import styles from './styles.scss';
import { AuthWidget } from '@components/AuthWidget';
import { AppLink } from '@components/AppLink';
import { v4 } from 'uuid';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
interface Props {}

const headerUrlsWithTitle = new Map<string, string>([
  ['/', 'Home'],
  ['/activity', '  My activity'],
  ['/albums', 'My albums'],
  ['/about', 'About'],
  ['/contact', 'Contact me']
]);

export const Header = (props: Props): JSX.Element => {
  return (
    <header>
      <Container className={cl(styles.content)}>
        <AppLink href="/">
          <a className={styles.title}>Blaurt`s gallery</a>
        </AppLink>
        <nav>
          {Array.from(headerUrlsWithTitle).map(([url, title]) => (
            <AppLink href={url} key={v4()}>
              <a className={cl(styles.item)} title={title} aria-label={title}>
                {title}
              </a>
            </AppLink>
          ))}
        </nav>
        <div className={styles['user-widget']}>
          <AuthWidget />
        </div>
      </Container>
    </header>
  );
};
