import React, { useState } from 'react'

import style from './SwiperMain.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import uuid from 'react-uuid'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.css'
import { FreeMode, Autoplay } from 'swiper/modules'
import classNames from 'classnames'
import { useGetTopFilmsQuery } from '../../services/KinopoiskApi'

const SwiperMain = () => {
  const [pages] = useState(1)
  const { data, error, isLoading } = useGetTopFilmsQuery(pages)

  return (
    <div className={style.wrapper}>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        className={classNames('wrap', style.slider)}
        initialSlide={0}
        freeMode={true}
        // mousewheel={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 3500,
        }}
      >
        {error ? (
          <div className="error">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="container">
            <div className="skeleton-main"></div>
            <div className="skeleton-main"></div>
            <div className="skeleton-main"></div>
          </div>
        ) : data ? (
          data?.items?.map((item) => (
            <SwiperSlide key={uuid()}>
              <div className={style.ops}>
                <div className={style.slide__img}>
                  <img src={item.posterUrl} alt="poster" />
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : null}
      </Swiper>
      <div className={style.right_shadow}></div>
    </div>
  )
}
export default SwiperMain
