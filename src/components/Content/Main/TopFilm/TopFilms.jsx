import React, { useEffect, useState } from 'react';
import style from './TopFilm.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../../../../store/feature/films/filmsSlice';
import PaginationFilms from '../PaginationFilms/PaginationFilms';
import { current } from '@reduxjs/toolkit';
import { Rate, Typography } from 'antd';
import { getRate } from '../../../../helpers/getRate'
const { Title } = Typography;

function TopFilms() {
    const dispatch = useDispatch()
    const topFilms = useSelector(state => state.films.topFilms || [])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

    return (<>

        <div className={style.filmBlock}>
            {topFilms?.films && topFilms?.films.map(films => (
                <div key={films.filmId} className={style.filmCard}>
                    <div className={style.filmCardImg}>
                        <img src={films.posterUrl} alt='Poster'></img>
                    </div>
                    <div className={style.filmCardHover}>
                        <Rate allowHalf
                            count={5}
                            disabled={true}
                            defaultValue={getRate(Math.floor(films.rating))} />
                        <div className={style.filmCardInfo}>
                            <div className={style.filmCardTitle}>
                                <Title level={3} className={style.title}>{films.nameRu}</Title>
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
        </div>
        <div className={style.filmPagination}>
            <PaginationFilms/>
        </div >
    </>
    );

}

export default TopFilms;