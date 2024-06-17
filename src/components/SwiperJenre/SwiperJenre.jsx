import { React } from 'react'
import style from './SwiperJenre.module.scss'
import { jenreImg } from '../../utils/const/swiperImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { FreeMode, Mousewheel } from 'swiper/modules'
import classNames from 'classnames'
import 'swiper/css'
import 'swiper/css/effect-fade'

const SwiperJenre = () => {
  const breakpoints = {
    320: {
      slidesPerView: 3,
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
      <div className={style.wrapper}>
        <div className={style.left_shadow}></div>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={10}
          breakpoints={breakpoints}
          className={classNames('wrap', style.swiperSlide)}
          initialSlide={0}
          freeMode={true}
          mousewheel={true}
          modules={[FreeMode, Mousewheel]}
        >
          {jenreImg.map((jenre) => (
            <SwiperSlide key={jenre.id}>
              <Link to={`/movies/${jenre.category}`} className={style.filmCard}>
                <div className={style.slider}>
                  <div className={style.slider_img}>
                    <img src={jenre.urls} alt="icon" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.right_shadow}></div>
      </div>
    </>
  )
}
export default SwiperJenre
