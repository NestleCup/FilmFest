import React from 'react';
import style from './MainPage.module.scss'
import { Col, Row } from 'antd';
import ApiFilms from '../PageFilm/ApiFilms';
import { Typography } from 'antd';
import SwiperContent from '../Main/SwiperContent/SwiperContent';
const MainPage = () => {

    return (
        <section className={style.mainWrap}>
            <Row justify="center">
                <Col span={24} className={style.mainBlock}>
                    <div className={style.mainTitle}>
                        <h1 className={style.title} style={{ color: "white" }}>
                            Добро пожаловать на MyFilms -
                            онлайн кинотеатр более чем 960 фильмов!
                        </h1>
                    </div>
                    <SwiperContent />
                </Col>

                <Col span={24} className={style.mainFilms} >
                    <ApiFilms />
                </Col>
            </Row>
        </section>
    );
};

export default MainPage;