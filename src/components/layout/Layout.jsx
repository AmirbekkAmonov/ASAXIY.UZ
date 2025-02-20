import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { UseStateValue } from '@/context';


function Layout() {
  const data = UseStateValue()
  return (
    <>
      <Header {...data}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;