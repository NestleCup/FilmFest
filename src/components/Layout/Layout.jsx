import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderPart from '../HeaderPart/HeaderPart';
import '../../style/_global.css'
import '../../style/_cardFilm.css';

const Layout = () => {
  return (
    <>
      <HeaderPart />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;