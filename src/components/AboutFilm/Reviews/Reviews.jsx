import React, { useState } from 'react';
import { useGetReviewsByIdQuery } from '../../../services/KinopoiskApi'
import style from './Reviews.module.scss'
import { Divider, Typography, ConfigProvider, Modal, Button } from 'antd';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { nanoid } from '@reduxjs/toolkit'
import like from '../../../assets/img/icon/like.png'
import dislike from '../../../assets/img/icon/dislike.png'
import { getToFormateDate } from '../../../utils/helpers/getToFormateDate'
const { Paragraph } = Typography;

const Reviews = () => {
  const { kinopoiskId } = useParams()
  const [ellipsis, setEllipsis] = useState(true);
  const { data, error, isLoading } = useGetReviewsByIdQuery(kinopoiskId)
  // const arrr = [1, 2, 3, 4, 5, 6]
  // const sliceArrrr = arrr.slice(0, 3)
  // console.log(sliceArrrr);
  // const slisedData = data.items.slice(0, 4)  
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 14,
          colorSplit: '#a7a7a791'
        },
      }}
    >
      <div className='wrap'>
        <h3 className='title'>
          Рецензии зрителей
        </h3 >
        <div >
          {error ? (
            <div>oh no errr</div>
          ) : isLoading ? (
            <Loading />
          ) : data ? (
            data.items.map(item => (
              <div key={item.kinopoiskId} className={style.block}>
                <div className={style.flex}>
                  <div >
                    <p className={style.title}>{item.author}</p>
                    <p className={style.subtitle}>{item.title}</p>
                  </div>
                  <div className={style.flex}>
                    <div className={style.bg}>
                      <div className={style.flex}>
                        <div className={style.img}>
                          <img src={like} alt='like' />
                        </div>
                        <span>{item.positiveRating}</span>
                      </div>
                      <div className={style.flex}>
                        <div className={style.img}>
                          <img src={dislike} alt='dislike' />
                        </div>
                        <span>{item.negativeRating}</span>
                      </div>
                    </div>
                    <span>{getToFormateDate(item.date, 'D MMMM YYYY')}</span>
                  </div>
                </div>
                <Divider />
                <Paragraph ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: 'подробнее' } : false}>
                  {item.description}
                </Paragraph>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Reviews;