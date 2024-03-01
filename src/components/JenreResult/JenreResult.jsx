import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJenreFilmByNumberQuery } from '../../services/KinopoiskApi';
import { Rate } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import PaginationFilms from '../PaginationFilms/PaginationFilms';
import Breadcrumb from '../Breadcrumb';
import uuid from 'react-uuid';

const JenreResult = () => {
  const { category } = useParams()
  const [pages, setPages] = useState(1)

  const { data, error, isLoading } = useGetJenreFilmByNumberQuery({ category, pages })

  return (
    <>
      <Breadcrumb />
      <div className='container'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loading />
        ) : data ? (
          data.items.map(films => (
            <React.Fragment key={uuid()}
            >
              <Link to={`/${films.kinopoiskId}`} className='film_link'>
                <div className='film_poster'>
                  <img src={films.posterUrl} alt='Poster'></img>
                </div>
                <div className='film_hover'>
                  {films.ratingKinopoisk === null ||
                    <Rate allowHalf
                      count={5}
                      disabled={true}
                      defaultValue={getRate(Math.floor(films.ratingKinopoisk))} />
                  }
                  <div className='film_info'>
                    <div className='film-info_title'>
                      <p className='title'>{films.nameRu}</p>
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
      <PaginationFilms data={data}
        error={error}
        isLoading={isLoading}
        pages={pages}
        setPages={setPages} />
    </>
  );
};

export default JenreResult;