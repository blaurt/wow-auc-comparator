import * as React from 'react';
import { NextPage } from 'next';

import Link from 'next/link';
import { AppInitialProps } from 'next/app';

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode = 500 }: Props) => {
  return (
    <div>
      <div>Status code: {statusCode}</div>
      <br />
      <Link href="/">to home</Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }): Props => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    statusCode
  };
};

export default Error;
