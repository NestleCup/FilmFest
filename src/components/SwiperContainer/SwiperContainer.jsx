import { Swiper } from 'swiper/react';
import style from './SwiperContainer.module.scss'
import classNames from 'classnames';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';


const breakpoints = {
  577: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 15,
  },
  769: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1025: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1200: {
    slidesPerGroup: 5,
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

export const SwiperContainer = ({ children, title }) => {

  return (
    <>
      <h3 className='wrap title'>
        {title}
      </h3 >
      <div className={style.wrapper}>
        <div className={style.left_shadow}></div>
        <Swiper
          slidesPerView={5.5}
          breakpoints={breakpoints}
          spaceBetween={10}
          className={classNames('wrap', style.slider)}
          initialSlide={0}
          freeMode={true}
          mousewheel={true}
          modules={[FreeMode, Mousewheel]}
        >
          {children}
        </Swiper >
        <div className={style.right_shadow}></div>
      </div>
    </>
  );
}

