import React from 'react'
import uuid from 'react-uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import classNames from 'classnames'
import style from './SwiperMovies.module.scss'
import { useGetTopFilmsQuery } from '../../services/KinopoiskApi'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.css'
import Loading from '../Loading/Loading'

const SwiperMovies = () => {
  const { data, error, isLoading } = useGetTopFilmsQuery()
  return (
    <div className={style.wrapper}>
      <div className={style.left_shadow}></div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={15}
        className={classNames('wrap', style.swiperSlide)}
        centeredSlides={true}
        centerInsufficientSlides={2}
        initialSlide={2}
      >
        {error ? (
          <div className="error">Oh no, there was an error</div>
        ) : isLoading ? (
          <Loading />
        ) : data ? (
          data.items.map((item) => (
            <SwiperSlide key={uuid()}>
              <div className={style.slide__img}>
                <img src={item.posterUrlPreview} alt="poster" />
              </div>
            </SwiperSlide>
          ))
        ) : null}
      </Swiper>
      <div className={style.right_shadow}></div>
    </div>
  )
}

export default SwiperMovies
