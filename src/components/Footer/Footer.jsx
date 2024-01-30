import React from 'react';
// import NavBar from '../HeaderPart/NavBar/NavBar';
import { routesParth } from '../../utils/const/routes';
import style from "./Footer.module.scss"
import {  NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import gmail from '../../assets/img/gmail.png'
const Footer = () => {

	function getCurrentYear() {
		return new Date().getFullYear();
	}
	const link = [
		{ id: 1, to: routesParth.Home, name: 'Главная' },
		{ id: 2, to: routesParth.Movies, name: 'Фильмы' },
		{ id: 3, to: routesParth.Serials, name: 'Сериалы' },
		{ id: 4, to: routesParth.Crtoons, name: 'Мультфильмы' },

	]
	return (
		<footer className={style.footer}>
			<div className={classNames('container', style.container)}>
				<div className={style.connection}>
					<Logo />
					<div className={style.gmail}>
						<span>
							<img src={gmail} alt="gmail" />
						</span>
						<a className={style.link}
							href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
							target="Starfall">KinoFest@gmail.com</a>
					</div>
				</div>

				<ul className={ style.list}>
							   {link.map(item => {
                        return (
                            <NavLink
                            key={item.id}
                                to={item.to}
                                className={style.link}
                            >{item.name}</NavLink>)
                    })}
				</ul>
				<span className={style.copy}>© {getCurrentYear()} КиноФест</span>
			</div>
		</footer>
	);
};

export default Footer;