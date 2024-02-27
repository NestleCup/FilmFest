import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJenreFilmByNumberQuery } from '../../services/KinopoiskApi';
import style from './JenreResult.module.scss'
import { Rate, Typography, ConfigProvider } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import PaginationFilms from '../PaginationFilms/PaginationFilms';
const { Title } = Typography;

const JenreResult = () => {
  const { category } = useParams()
  const [pages, setPages] = useState(1)

  const { data, error, isLoading } = useGetJenreFilmByNumberQuery({category, pages})

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Spin: {
              colorPrimary: 'red'
            },
          },
        }}
      >
        <div className={style.filmBlock}>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <Loading />
          ) : data ? (
            data.items.map(films => (
              <React.Fragment key={films.kinopoiskId}>
                <Link to={`/${films.kinopoiskId}`} className={style.filmCard}>
                  <div className={style.filmCardImg}>
                    <img src={films.posterUrl} alt='Poster'></img>
                  </div>
                  <div className={style.filmCardHover}>
                    {films.ratingKinopoisk === null ||
                      <Rate allowHalf
                        count={5}
                        disabled={true}
                        defaultValue={getRate(Math.floor(films.ratingKinopoisk))} />
                    }
                    <div className={style.filmCardInfo}>
                      <div className={style.filmCardTitle}>
                        <Title level={3} className={style.title}>{films.nameRu}</Title>
                      </div>
                      <div className={style.filmCardGenre}>
                        <span className={style.genres}>{films.genres.map(
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
      </ConfigProvider>
    </>
  );
};

export default JenreResult;