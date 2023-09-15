import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './PageFilm.module.css'

function ApiFilms() {

    const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/301'
    const apiKey = 'c3a27a07-8dbc-4a98-a690-49351cf6df33'
    const [filmData, setFilmData] = useState([])

    useEffect(() => {
        axios
            .get(baseUrl, {
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log(res.data);
                setFilmData(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            {/* {filmData.map((films) =>(
                <div>
                    <h1 key={films.kinopoiskId}>ittle</h1>
                    <div className={s.cardBlock}>
                        <div className={s.filmTitle} >
                            <h1 className={s.title}>{films.nameRu}</h1>
                            <p className={s.slogan}>{films.slogan}</p></div>
                        <div className={s.cardBlockImg}>
                            <img src={films.posterUrl} alt='ds'></img>
                        </div>
                        <div className={s.cardBlockFilter}></div>
                    </div>
                </div>
            ))} */}
        </div>
    );

}

export default ApiFilms;