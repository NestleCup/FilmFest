import React from 'react';
import gmail from '../../assets/img/icon/mail.png'
import phone from '../../assets/img/icon/phone.png'
import telegram from '../../assets/img/icon/telegram.png'
import style from './Networks.module.scss'
const Networks = () => {
	return (
		<div className={style.container}>
				<a
					href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
					target="Starfall">
					<img src={gmail} alt="Gmail" title='Gmail' />
				</a>
				<a
					href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
					target="Starfall">
					<img src={phone} alt="Whatsapp" title='Whatsapp' />
				</a>
				<a
					href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
					target="Starfall">
					<img src={telegram} alt="Telegram" title='Telegram' />
				</a>
		</div>
	);
};

export default Networks;