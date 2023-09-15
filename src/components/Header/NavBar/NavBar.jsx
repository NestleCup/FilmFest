import React from 'react';
import s from './NavBar.module.css'
import { Col, Row } from 'antd';
const NavBar = () => {
    return (
        <nav>
            <ul className={s.items}>
                <li className={s.itemsList}>
                    <a href='/main'>Главная </a>
                </li>
                <li className={s.itemsList}>
                    <a href='/movies'>Фильмы </a>
                </li>
                <li className={s.itemsList}>
                    <a href='/serials'>Сериалы </a>
                </li>

                <li className={s.itemsList}>
                    <a href='/cartoons'>Мультфильмы </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;