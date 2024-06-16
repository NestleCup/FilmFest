import React from 'react'
import style from './Logo.module.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className={style.img}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />

        <h1 className={style.title}>КиноФест</h1>
      </div>
    </Link>
  )
}

export default Logo
