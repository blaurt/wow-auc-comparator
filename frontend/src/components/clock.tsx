import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startClock } from '../store/core/actions';
import { AnyAction } from 'redux';

const pad = (n: number) => (n < 10 ? `0${n}` : n);

const format = (t: Date) => {
  const hours = t.getUTCHours();
  const minutes = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
// componentDidMount() {
//   this.props.dispatch(startClock())
// }
function ClockFC({
  lastUpdate,
  light,
  dispatch
}: {
  lastUpdate: Date;
  light: boolean;
  dispatch: (a: AnyAction) => void;
}) {
  useEffect(() => {
    dispatch(startClock());
  }, []);
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
}

export const Clock = connect(({ lastUpdate, count, light }: any) => ({
  lastUpdate,
  count,
  light
}))(ClockFC);
