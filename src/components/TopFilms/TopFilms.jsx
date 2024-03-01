import React from 'react';
import { Rate } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import uuid from 'react-uuid';

export function TopFilms(props) {
  return (
    <>
      <div className='container'>
        {props.error ? (
          <>Oh no, there was an error</>
        ) : props.isLoading ? (
          <Loading />
        ) : props.data ? (
          props.data.items.map(films => (
            <React.Fragment key={uuid()}>
              <Link to={`/${films.kinopoiskId}`} className='film_link'>
                <div className='film_poster'>
                  <img src={films.posterUrl} alt='Poster' />
                </div>
                <div className='film_hover'>
                  {films.ratingKinopoisk === null ||
                    <Rate allowHalf
                      count={5}
                      disabled={true}
                      defaultValue={getRate(Math.floor(films.ratingKinopoisk))} />
                  }
                  <div className='film_info'>
                    <div >
                      <p className='film-info_title'>{films.nameRu}</p>
                    </div>
                    <div className='film-info_genre'>
                      <span className='genre'>{films.genres.map(
                        (genre) => genre.genre).join(', ')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))
        ) : null
        }
      </div>

    </>
  );

}