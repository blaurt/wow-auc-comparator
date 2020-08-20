import React from 'react';
import Link from 'next/link';

interface Props {
  isLoggedIn?: boolean;
}

export const AuthWidgetComponent = ({
  isLoggedIn = false
}: Props): JSX.Element => {
  return (
    <div>
      {isLoggedIn ? (
        'AuthWidget logged'
      ) : (
        <Link href="/auth/login">
          <a>AuthWidget not logged</a>
        </Link>
      )}
    </div>
  );
};
