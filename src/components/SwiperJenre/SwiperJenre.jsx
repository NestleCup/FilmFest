import { React } from 'react';
import style from "./SwiperJenre.module.scss"
import { jenreImg } from '../../utils/const/swiperImage'
import {  SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { SwiperContainer } from '../SwiperContainer/SwiperContainer';
import 'swiper/css';
import 'swiper/css/effect-fade';


const SwiperJenre = () => {

    return (
     <SwiperContainer title='Выберите жанр'>
                {jenreImg.map(jenre => {
                    return (
                        <SwiperSlide key={jenre.id} >
                            <Link to={`/movies/${jenre.category}`} className={style.filmCard}>
                                <div className={style.slider} >
                                    <div className={style.slider_img} >
                                        <img src={jenre.urls} alt="icon" />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </SwiperContainer>
    );
};
export default SwiperJenre;