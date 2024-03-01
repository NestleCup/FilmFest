import React from 'react';
import style from "./MoviesPage.module.scss"
import SwiperJenre from '../../components/SwiperJenre/SwiperJenre';
import Breadcrumb from '../../components/Breadcrumb/index';
import SwiperMovies from '../../components/SwiperMovies/SwiperMovies';

const MoviesPage = () => {
    return (
        <section className='bg'>
            <div className={style.position}>
                <SwiperMovies/>
                <SwiperJenre />
            </div>
        </section>
    );
};
export default MoviesPage;
