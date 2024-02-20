import { React } from 'react';
import style from "./SwiperJenre.module.scss"
import { jenreImg } from '../../utils/const/swiperImage'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { nanoid } from '@reduxjs/toolkit'
import { FreeMode, Mousewheel } from 'swiper/modules';
const SwiperJenre = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.left_shadow} />
            <Swiper
                loop={true}
                freeMode={true}
                slidesPerView={5.5}
                spaceBetween={30}
                centeredSlides={true}
                initialSlide={3}
                mousewheel={true}
                modules={[FreeMode, Mousewheel]}
                className="mySwiper"
            >
                {jenreImg.map(jenre => {
                    return (
                        <SwiperSlide key={nanoid()} >
                            <div className={style.slider}>
                                <div className={style.slider_img} >
                                    <img src={jenre.urls} alt="icon" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className={style.right_shadow} />
        </div>
    );
};
export default SwiperJenre;