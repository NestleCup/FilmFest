import React from 'react';
import style from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import { routesParth  } from '../../../utils/const/routes';

 const NavBar = () => {
    const link = [
        { id: 1, to: routesParth.Home, name: 'Главная' },
        { id: 2, to: routesParth.Movies, name: 'Фильмы' },
        { id: 3, to: routesParth.Serials, name: 'Сериалы' },
        { id: 4, to: routesParth.Crtoons, name: 'Мультфильмы' },

    ]
    
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.items}>
                    {link.map(item => {
                        return (
                            <NavLink
                            key={item.id}
                                to={item.to}
                                className={style.link}
                            >{item.name}</NavLink>)
                    })}
                </div>
            </nav>
        </div>


    )
}
export default NavBar;