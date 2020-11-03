import React, { useEffect } from 'react';
import Link from 'next/link';

const Bmw = () => {
  return (
    <div>
      <div>
        bmw
      </div>
      <div>
        <Link href='/'>
          <a>메인</a>
        </Link>
      </div>
    </div>
  )
};

export default Bmw;