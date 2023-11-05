import React from 'react';
import style from './MainPage.module.scss'
import { Typography } from 'antd';
import { PaginationFilms, TopFilms, SwiperContent} from './index';

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
                <TopFilms />
            </div>
            <div className={style.filmPagination}>
                <PaginationFilms />
            </div >
        </section>
    );
};

export default MainPage;