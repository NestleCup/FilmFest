import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderPart from '../HeaderPart/HeaderPart';
import style from './Layout.module.scss'
import '../../_global.css'



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