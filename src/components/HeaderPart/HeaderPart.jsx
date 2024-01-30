import React from 'react';
import style from './HeaderPart.module.scss'
import logo from '../../assets/img/logo.png'

import NavBar from './NavBar/NavBar';
import Search from './Search/Search';
import Logo from '../Logo/Logo';


const HeaderPart = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.flex}>
        <Logo/>
          <NavBar />
          <div className={style.flex}>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}


export default HeaderPart;