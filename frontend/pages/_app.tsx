import App, { AppInitialProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from '../src/store/core/store';
// import 'semantic-ui-css/semantic.min.css';

import '@static/styles/global.scss';
import { Layout } from '@components/Layouts/SemanticUI';

interface AppProps extends AppInitialProps {
  store: any;
}

class MyApp extends App<AppProps> {
  // static async getInitialProps({ Component, ctx }:  ) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps({ ctx })
  //   }

  //   return { pageProps }
  // }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout component={Component} pageProps={pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
