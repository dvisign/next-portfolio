import React from 'react';
import Header from './common/Header';
import { useSelector } from 'react-redux';

const Navs = () => {
  const { allNav } = useSelector(state => state.common);
  if (allNav) {
    return (
      <Header />
    );
  } else {
    return null;
  }
};
const AppLayout = ({ children }) => {
  return (
    <div>
      <Navs/> 
      <div>
        {children}
      </div>
    </div>
  )
}

export default AppLayout;