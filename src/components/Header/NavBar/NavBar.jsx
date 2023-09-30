import React from 'react';
import style from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
const NavBar = () => {
    return (
           <Row       gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
                <div className={style.nav}>
                    <Col span={6} className={style.navItems}>
                        <NavLink to='/main' className={style.navLink} >Главная </NavLink>
                    </Col>
                    <Col span={6} className={style.navItems}>
                        <NavLink to='/movies' className={style.navLink} >Фильмы </NavLink>
                    </Col>
                    <Col span={6} className={style.navItems}>
                        <NavLink to='/serials' className={style.navLink} >Сериалы </NavLink>
                    </Col>
                    <Col span={6} className={style.navItems}>
                        <NavLink to='/cartoons' className={style.navLink} >Мультфильмы </NavLink>
                    </Col>
                    </div>
            </Row>

     
    )
}

export default NavBar;