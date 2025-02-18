import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function Layout({ setSearch, setModal, modal }) {
  return (
    <>
      <Header setSearch={setSearch} setModal={setModal} modal={modal} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;