import React from 'react';
import { useState } from 'react';

import style from './Reviews.module.scss'
import { Divider, Typography } from 'antd';
const { Paragraph } = Typography;

const Reviews = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <div className='wrap'>
      <h3 className='title'>
        Рецензии
      </h3 >
      <div>
        <div className={style.block}>
          <span>Влад Новиков</span>
          <p>Сумасшедшая жизнь</p>
          <Divider />
          <Paragraph ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: 'подробнее' } : false}>
            Несколько слов о данном режиссере: Наверное каждый кто
            является знатоком кино и киноискусства, рано или поздно
            сталкивался с именем Акира Куросава, вот и я несколько
            лет назад впервые услышал это имя из истории...
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

export default Reviews;