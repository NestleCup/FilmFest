import React from 'react';
import style from './Logo.module.scss'
import logo from '../../assets/img/logo.png'

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.img}>
        <img src={logo} alt='logo' />
      </div>
      <h1 className={style.title}>КиноФест</h1>
    </div>
  );
};

export default Logo;