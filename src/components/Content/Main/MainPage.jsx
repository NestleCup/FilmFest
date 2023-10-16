import React from 'react';
import style from './MainPage.module.scss'
import { Col, Row } from 'antd';
import SwiperContent from '../Main/SwiperContent/SwiperContent';
import TopFilms from './TopFilm/TopFilms';
import { Typography } from 'antd';
const { Title } = Typography;
const MainPage = () => {

    return (
        <section className={style.mainWrap}>
                <div className={style.main}>
                    <div className={style.mainTitle}>
                        <Title className={style.title}>
                            Добро пожаловать на MyFilms -
                            онлайн кинотеатр более чем 960 фильмов!
                        </Title>
                    </div>
                    <div className={style.mainSwiper}>
                    <SwiperContent />
                    </div>
                </div>

                <div className={style.mainFilms} >
                    <TopFilms/>
                </div>
        </section>
    );
};

export default MainPage;