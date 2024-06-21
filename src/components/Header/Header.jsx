import React from 'react'
import style from './Header.module.scss'
import NavBar from './NavBar/NavBar'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Header = () => {
  return (
    <header className={style.header}>
      <div className="wrap">
        <div className={style.flex}>
          <Logo />
          <NavBar />
          <ScrollToTop />
          <Link to="search">
            <div className={style.img}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4672 13.4583C11.5968 13.4583 14.1339 10.9213 14.1339 7.79167C14.1339 4.66205 11.5968 2.125 8.4672 2.125C5.33759 2.125 2.80054 4.66205 2.80054 7.79167C2.80054 10.9213 5.33759 13.4583 8.4672 13.4583Z"
                  stroke="#FF001F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5505 14.875L12.4692 11.7937"
                  stroke="#FF001F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
