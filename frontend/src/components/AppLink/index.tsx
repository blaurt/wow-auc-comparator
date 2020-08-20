import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

export function AppLink(props: PropsWithChildren<LinkProps>): JSX.Element {
  const { children, ...otherProps } = props;
  return <Link {...otherProps}>{children}</Link>;
}
