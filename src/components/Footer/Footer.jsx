import React from 'react'
import style from './Footer.module.scss'
import classNames from 'classnames'
import Logo from '../Logo/Logo'
import { Divider, ConfigProvider } from 'antd'
import Networks from '../Networks/Networks'
import NavBar from '../Header/NavBar/NavBar'

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#fa4d4d',
          colorText: '#8A8A8A',
          fontSize: 18,
          fontFamilyCode: 'Jura',
          colorSplit: '#1C1E2A',
          orientationMargin: 0,
        },
      }}
    >
      <footer className={style.footer}>
        <div className={classNames('wrap', style.container)}>
          <Logo />
          <NavBar />
          <div className={style.support}>
            <p>Остались вопросы?</p>
            <a
              href="https://www.gmail.com/mail/help/intl/ru/about.html?de."
              className="link_supp"
              target="Starfall"
            >
              supportFest@gmail.com
            </a>
          </div>
        </div>

        <Divider />
        <div className={classNames('wrap', style.networks)}>
          <span className={style.copy}>© {getCurrentYear()}, КиноФест</span>
          <Networks />
        </div>
      </footer>
    </ConfigProvider>
  )
}

export default Footer
