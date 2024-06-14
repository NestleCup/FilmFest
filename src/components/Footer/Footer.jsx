import React from 'react';
import style from "./Footer.module.scss"
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import { Divider, ConfigProvider } from 'antd';
import Networks from '../Networks/Networks';

import { Typography } from 'antd';
import NavBar from '../Header/NavBar/NavBar';

const { Text } = Typography;
const Footer = () => {

	function getCurrentYear() {
		return new Date().getFullYear();
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
					orientationMargin: 0
				},
			}}
		>
			<footer className={style.footer}>
				<div className={classNames('wrap', style.container)}>
					<Logo />
					<NavBar/>
					<div className={style.support}>
						<p>Остались вопросы?</p>
						<Text underline>supportFest@gmail.com</Text>
					</div>
				</div>

				<Divider />
				<div className={classNames('wrap', style.networks)}>
					<span className={style.copy}>© {getCurrentYear()}, КиноФест</span>
					<Networks />
				</div>
			</footer>
		</ConfigProvider  >

	);
};

export default Footer;