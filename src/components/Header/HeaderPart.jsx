import React from 'react';
// import NavBar from '../NavBar/NavBar';
import s from '../Header/HeaderPart.module.css'

import logo from '../../img/logo.png'
import search from '../../img/search.png'
import NavBar from './NavBar/NavBar';



const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.logoContainer}>
          <div className={s.logoImg}>
            <img src={logo} alt='d' />
          </div>
          <h1 className={s.title}>MyFilms</h1>
        </div>
      </div>
      <div className={s.navBar}>
        <NavBar />
      </div>
      <div className={s.search}>
        <img src={search} alt='dd' />
        <input type="text" class="header__search" placeholder="Поиск" />
      </div>

    </header >
  );
}


export default Header;