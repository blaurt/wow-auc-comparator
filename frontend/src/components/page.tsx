import React from 'react';
import Link from 'next/link';

import { Counter } from './counter';
import { Clock } from './clock';

export default function Page(props: any): JSX.Element {
  const { linkTo, NavigateTo, title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <Clock />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
    </div>
  );
}
