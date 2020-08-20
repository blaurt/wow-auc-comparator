import React from 'react';

import Page from '@components/page';

export default class Other extends React.Component {
  // static async getInitialProps(props) {
  //   const { store, isServer } = props.ctx
  //   store.dispatch(tickClock(isServer))
  //   return { isServer }
  // }

  // componentDidMount() {
  //   this.props.dispatch(startClock())
  // }

  render() {
    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />;
  }
}
