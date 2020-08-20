import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../store/core/actions';
import { AnyAction } from 'redux';

interface Props {
  count: number | string;
  dispatch: (action: AnyAction) => void;
}

class CounterComponent extends Component<Props> {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render(): JSX.Element {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    ) as JSX.Element;
  }
}

const mapStateToProps = ({ count }: { count: number }) => ({ count });
export const Counter = connect(mapStateToProps)(CounterComponent);
