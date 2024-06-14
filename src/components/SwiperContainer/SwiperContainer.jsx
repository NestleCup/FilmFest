import { Swiper } from 'swiper/react'
import style from './SwiperContainer.module.scss'
import classNames from 'classnames'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'

export const SwiperContainer = ({ children, title }) => {
  const breakpoints = [
    {
      breakpoint: 768,
      styles: {
        slidesPerView: 1,
      },
    },
    {
      breakpoint: 1024,
      styles: {
        slidesPerView: 2,
      },
    },
    {
      breakpoint: 1280,
      styles: {
        slidesPerView: 3,
      },
    },
  ]

  return (
    <>
      <p className="wrap title">{title}</p>
      <div className={style.wrapper}>
        <div className={style.left_shadow}></div>
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={4.5}
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
