import { Swiper } from 'swiper/react'
import style from './SwiperContainer.module.scss'
import classNames from 'classnames'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'

export const SwiperContainer = ({ children, title }) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1404: {
      slidesPerView: 5.5,
    },
  }

  return (
    <>
      <p className="wrap title">{title}</p>
      <div className={style.wrapper}>
        <div className={style.left_shadow}></div>
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={5.5}
          spaceBetween={10}
          className={classNames('wrap', style.slider)}
          initialSlide={0}
          freeMode={true}
          modules={[FreeMode]}
        >
          {children}
        </Swiper>
        <div className={style.right_shadow}></div>
      </div>
    </>
  )
}
