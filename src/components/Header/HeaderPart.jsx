import React from 'react';
import style from '../Header/HeaderPart.module.scss'
import logo from '../../assets/img/logo.png'

import { NavBar, Search, ModalPage } from './index';

const HeaderPart = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.header__block}>
          <div className={style.header__logo}>
            <div className={style.header__img}>
              <img src={logo} alt='logo' />
            </div>
            <h2 className={style.title} style={{ color: "white" }}>MyFilms</h2>
          </div>
          <NavBar />
          <ModalPage />
          <Search />
        </div>
      </div>
    </header>
  );
}


export default HeaderPart;