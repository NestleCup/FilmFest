import React from 'react';
// import NavBar from '../HeaderPart/NavBar/NavBar';
import { routesParth } from '../../utils/const/routes';
import style from "./Footer.module.scss"
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import { Divider, ConfigProvider } from 'antd';
import Networks from '../Networks/Networks';

import { Typography } from 'antd';

const { Text } = Typography;
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
		<ConfigProvider
			theme={{
				token: {
					colorLink: '#fa4d4d',
					colorText: '#8A8A8A',
					fontSize: 22,
					fontFamilyCode: 'Jura',
					colorSplit: '#1C1E2A'
				},
			}}
		>
			<footer className={classNames('wrap', style.footer)}>
				<div className={style.container}>
					<div className={style.connection}>
						<Logo />
						<div className={style.gmail}>
							<span>
							</span>
						</div>
					</div>
					<ul className={style.list}>
						{link.map(item => {
							return (
								<NavLink
									key={item.id}
									to={item.to}
									className={style.link}
								>{item.name}</NavLink>)
						})}
					</ul>
					<div className={style.support}>
						<p>Остались вопросы?</p>
						<Text underline>supportFest@gmail.com</Text>
					</div>
				</div>

				<Divider />
				<div className={style.networks}>
					<span className={style.copy}>© {getCurrentYear()}, КиноФест.  Все права защищены.</span>
					<Networks />
				</div>
			</footer>
		</ConfigProvider  >

	);
};

export default Footer;