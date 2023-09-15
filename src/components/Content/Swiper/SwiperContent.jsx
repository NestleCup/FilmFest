import s from './SwiperContent.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../../../node_modules/swiper/swiper.css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const SwiperContent = () => {
    return (

        <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
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
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className={s.mySwiper}
            slidesPerView={3}
            watchSlidesProgress={true}
        >
            <div
                className="parallax-bg"
                data-swiper-parallax="0%"
            ></div>
            <section className={s.SlideWrap}>
                <SwiperSlide>
                    <div className={s.slideBlock}>
                        <div className={s.slideText}>
                            <div className={s.title} >
                                Матрица
                            </div>
                            <div className={s.subtitle} >
                                Subtitle
                            </div>
                        </div>
                        <div className={s.sliderImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='uu' />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideBlock}>
                        <div className={s.slideText}>
                            <div className={s.title} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={s.subtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={s.sliderImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='uu' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideBlock}>
                        <div className={s.slideText}>
                            <div className={s.title} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={s.subtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={s.sliderImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='uu' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideBlock}>
                        <div className={s.slideText}>
                            <div className={s.title} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={s.subtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={s.sliderImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='uu' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideBlock}>
                        <div className={s.slideText}>
                            <div className={s.title} data-swiper-parallax="-300">
                                Матрица
                            </div>
                            <div className={s.subtitle} data-swiper-parallax="-200">
                                Subtitle
                            </div>
                        </div>
                        <div className={s.sliderImg}>
                            <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='uu' />
                        </div>
                    </div>
                </SwiperSlide>
            </section>

        </Swiper >
    );
};
export default SwiperContent;