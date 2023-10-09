import React, { useEffect, useState } from 'react';
import style from './ApiFilm.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../../../store/feature/films/filmsSlice';
import { Pagination } from 'antd';
import { current } from '@reduxjs/toolkit';

function ApiFilms() {
    const dispatch = useDispatch()
    const topFilms = useSelector(state => state.films.topFilms || [])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        console.log(topFilms);
        dispatch(fetchFilms())
    }, [])

    const handlePageClick = (data) => {
        console.log(data);
    }
    // let ratingFloor = films.rating ?  films.rating.toFixed(1) : ''
    return (
        <>
            <div className={style.filmBlock}>
                {topFilms?.films && topFilms?.films.map(films => (
                    <div key={films.filmId} className={style.filmCard}>
                        <div className={style.filmCardImg}>
                            <img src={films.posterUrl} alt='Poster'></img>
                        </div>
                        <div className={style.filmCardHover}>
                            <div className={style.filmCardRating}>
                                <span>{films.rating}</span>
                            </div>
                            <div className={style.filmCardInfo}>
                                <div className={style.filmCardTitle}>
                                    <span className={style.title}>{films.nameRu}</span>
                                </div>
                                <div className={style.filmCardGenre}>
                                    <span className={style.genres}>{films.genres.map(
                                        (genre) => genre.genre)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }

                <Pagination

                    defaultCurrent={1}
                    total={500}
                    onChange={handlePageClick}
                    pageSize={20}
                    className={style.colorText}
                />;
            </div>
        </>
    );

}

export default ApiFilms;