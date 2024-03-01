import React from 'react';
import uuid from 'react-uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import classNames from 'classnames';
import style from './SwiperMovies.module.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';

const SwiperMovies = () => {
  return (
    <div className={style.wrapper} >
        <div className={style.left_shadow}></div>

        <Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          className={classNames('wrap', style.swiperSlide)}
          centeredSlides = {true}
          centerInsufficientSlides={2}
          initialSlide={2}

        >
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className={style.slide__img}>
                  <img src='https://www.kartinki24.ru/uploads/gallery/main/528/kartinki24_ru_grinch_15.jpg' alt='poster' />
                </div>
              </SwiperSlide>
        </Swiper >
        <div className={style.right_shadow}></div>

    </div>
  );
};

export default SwiperMovies;