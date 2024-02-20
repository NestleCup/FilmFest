import React from 'react';
import style from './Actor.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Loading from '../../Loading/Loading';
import { nanoid } from '@reduxjs/toolkit'

const Actors = ({ dataActors, errActors, loadingActors }) => {
  return (
    <>
      <h3 className='wrap title'>
        Актеры и создатели
      </h3 >
      <div className={style.wrapper}>
        <div className={style.left_shadow} />
        <Swiper
          freeMode={true}
          slidesPerView={5.5}
          className="mySwiper"
          freeModeMomentum={false}
          mousewheel={true}
        >
          {errActors ? (
            <div>oh no errr</div>
          ) : loadingActors ? (
            <Loading />
          ) : dataActors ? (
            dataActors.map(data => (
              <SwiperSlide key={nanoid()}>
                <div className={style.container}>
                  <div className={style.profile_img}>
                    <img src={data.posterUrl} alt='profile' />
                  </div>
                  <p>{data.nameRu}</p>
                  <p className={style.profession}>{data.professionText.slice(0, -1)}</p>
                </div>
              </SwiperSlide>
            ))
          ) : null}
        </Swiper >
        <div className={style.right_shadow} />
      </div>
    </>
    // {data.logoUrl === null ||
    //   <div className={style.logo}>
    //     <img src={data.logoUrl} alt="logo" />
    //   </div>}

  )

};

export default Actors;