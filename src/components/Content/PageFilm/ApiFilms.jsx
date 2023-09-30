import React, { useEffect, useState } from 'react';
import style from './ApiFilm.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilms } from '../../../store/feature/films/filmsSlice';

function ApiFilms() {
    const dispatch = useDispatch()
    const topFilms = useSelector(state => state.films.topFilms || [])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])
const ratingStatus = (rating) =>{

}
    return (
        <div className={style.filmBlock}>
            {topFilms?.films && topFilms?.films.map(films => (
                <div key={films.filmId} className={style.filmCard}>
                    <div className={style.filmCardTitle} >
                        <span className={style.title}>{films.nameRu}</span>
                    </div >
                    <div className={style.filmCardRating}>
                        <span>{films.rating}</span>
                    </div>
                    <div className={style.filmCardImg}>
                        <img src={films.posterUrl} alt='Poster'></img>
                    </div>
                    <div className={style.filmCardBackground}>
                    </div>
                </div>


            ))
            }
        </div >
    );

}

export default ApiFilms;