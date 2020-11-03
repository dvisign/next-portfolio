import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <Link href='/'>
          <a>메인</a>
        </Link>
        <Link href='/invitation'>
          <a>청첩장</a>
        </Link>
        <Link href='/bmw'>
          <a>bmw</a>
        </Link>
      </div>
  )
};

export default Header;