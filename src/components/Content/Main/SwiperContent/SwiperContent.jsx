import style from './SwiperContent.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const SwiperContent = () => {
    return (

        <Swiper
            style={{
                '--swiper-navigation-color': '#C21111',
                '--swiper-pagination-color': '#C21111',
            }}
            speed={600}
            pagination={{
                clickable: true,
            }}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
                delay: 2800,
                disableOnInteraction: false,
            }}
            loop= {true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className={style.mySwiper}
            slidesPerView={3}
            watchSlidesProgress={true}
        >
            <div
                className="parallax-bg"
                data-swiper-parallax="0%"
            ></div>
            
    
                <SwiperSlide>
                    <div className={style.slideBlock}>
                        <div className={style.slideInfo}>
                            <div className={style.slideTitle} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={style.slideSubtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={style.slideImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='foto' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slideBlock}>
                        <div className={style.slideInfo}>
                            <div className={style.slideTitle} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={style.slideSubtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={style.slideImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='foto' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slideBlock}>
                        <div className={style.slideInfo}>
                            <div className={style.slideTitle} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={style.slideSubtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={style.slideImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='foto' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slideBlock}>
                        <div className={style.slideInfo}>
                            <div className={style.slideTitle} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={style.slideSubtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={style.slideImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='foto' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slideBlock}>
                        <div className={style.slideInfo}>
                            <div className={style.slideTitle} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={style.slideSubtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={style.slideImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='foto' />
                        </div>
                    </div>
                </SwiperSlide>
         

        </Swiper >
    );
};
export default SwiperContent;