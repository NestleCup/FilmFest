import React from 'react';
import style from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import {routes} from '../../../utils/const/rotes'
export const NavBar = () => {
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.navItems}>
                    <NavLink to={routes.Home} className={style.navLink} >Главная </NavLink>
                </div>
                <div className={style.navItems}>
                    <NavLink to={routes.Movies} className={style.navLink} >Фильмы </NavLink>
                </div>
                <div className={style.navItems}>
                    <NavLink to={routes.Serials} className={style.navLink} >Сериалы </NavLink>
                </div>
                <div className={style.navItems}>
                    <NavLink to={routes.Crtoons} className={style.navLink} >Мультфильмы </NavLink>
                </div>
            </nav>
        </div>


    )
}
