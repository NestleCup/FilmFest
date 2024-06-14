import React from 'react';
import style from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import { routesParth } from '../../../utils/const/routes';

const NavBar = () => {
    const link = [
        { id: 1, to: routesParth.Home, name: 'Главная' },
        { id: 2, to: routesParth.Movies, name: 'Фильмы' },
        { id: 3, to: routesParth.Serials, name: 'Сериалы' },
        { id: 4, to: routesParth.Cartoons, name: 'Мультфильмы' },

    ]

    return (
        <div>
            <nav className={style.nav}>
                <div className={style.items}>
                    {link.map(item => {
                        return (

                            <span key={item.id} className={style.link}>
                                <NavLink
                                    caseSensitive
                                    to={item.to}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >{item.name}</NavLink>
                            </span>

                        )
                    })}
                </div>
            </nav>
        </div>


    )
}
export default NavBar;