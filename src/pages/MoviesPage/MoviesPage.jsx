import React from 'react';
import style from "./MoviesPage.module.scss"
import SwiperJenre from '../../components/SwiperJenre/SwiperJenre';
import Breadcrumb from '../../components/Breadcrumb/index';

const MoviesPage = () => {
    return (
        <section className='bg'>
            <div className={style.position}>
                <div className='wrap'>
                    <Breadcrumb />
                    <h2 className={style.title}>Выберите жанр</h2>
                </div>
                    <SwiperJenre />
            </div>
        </section>
    );
};
export default MoviesPage;
