import React from 'react';
import style from './TopFilms.module.scss'
const TopFilms = () => {
    return (
        <>
            <div>
                <h1>Top films</h1>
            </div>
            <section className={style.filmBlock}>
                <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/300.jpg' />
                </div>
                <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/302.jpg' />
                </div>
                <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/300.jpg' />
                </div>
                <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/302.jpg' />
                </div>    <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/300.jpg' />
                </div>
                <div className={style.filmCard}>
                    <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/302.jpg' />
                </div>
            </section>

        </>
    );
};

export default TopFilms;