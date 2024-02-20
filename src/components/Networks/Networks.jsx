import React from 'react';
import gmail from '../../assets/img/icon/mail.png'
import phone from '../../assets/img/icon/phone.png'
import telegram from '../../assets/img/icon/telegram.png'
const Networks = () => {
  return (
    <div>
      				<a 
							href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
							target="Starfall">
							<img src={gmail} alt="gmail" />
						</a>
						<a 
							href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
							target="Starfall">
							<img src={phone} alt="gmail" />
						</a>
						<a 
							href='https://www.gmail.com/mail/help/intl/ru/about.html?de.'
							target="Starfall">
							<img src={telegram} alt="gmail" />
						</a>
    </div>
  );
};

export default Networks;