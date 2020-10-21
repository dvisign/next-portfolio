import React from 'react';

import Header from './common/Header';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default AppLayout;