import React from 'react';
import { Header } from './Header';
import { MainComponentProps, Main } from './Main';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

interface Props extends MainComponentProps {}

export const Layout = ({ component, pageProps }: Props): JSX.Element => {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Main component={component} pageProps={pageProps} />
      {/* <Footer /> */}
    </>
  );
};
