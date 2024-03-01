import React from 'react';
import { Rate } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import { useGetComicsFilmQuery } from '../../services/KinopoiskApi';
import Loading from '../Loading/Loading'
import uuid from 'react-uuid';


const Cartoons = () => {
  const { data, error, isLoading } = useGetComicsFilmQuery();

  return (
    <>
      <div className='container'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loading />
        ) : data ? (
          data.items.map(items => (
            <Link to={`/${items.kinopoiskId}`} key={uuid()} className='film_link'>
              <div className='film_poster'>
                <img src={items.posterUrl} alt='Poster'></img>
              </div>
              <div className='film_hover'>
                <Rate allowHalf
                  count={5}
                  disabled={true}
                  defaultValue={getRate(Math.floor(items.ratingImdb))} />
                <div className='film_info'>
                  <div className='film-info_title'>
                    <p className='title'>{items.nameRu}</p>
                  </div>
                  <div className='film-info_genre'>
                    <span className='genre'>{items.genres.map(
                      (genre) => genre.genre).join(', ')}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : null
        }
      </div>

    </>
  );
};

export default Cartoons;
