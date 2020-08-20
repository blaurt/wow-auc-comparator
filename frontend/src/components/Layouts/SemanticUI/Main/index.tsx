import React from 'react';
import cl from 'classnames';
import { Container } from 'semantic-ui-react';

import styles from './styles.scss';

export interface MainComponentProps {
  component: React.ComponentType;
  pageProps: any;
}

export const Main = ({
  component: Component,
  pageProps
}: MainComponentProps): JSX.Element => {
  return (
    <Container as="main" className={cl(styles.main)}>
      <h1>Main</h1>
      <Component {...pageProps} />
    </Container>
  );
};
