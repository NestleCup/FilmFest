import React from 'react';
import style from './TopFilms.module.scss'
import { Rate, Typography, ConfigProvider } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
const { Title } = Typography;

export function TopFilms(props) {
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
          {props.error ? (
            <>Oh no, there was an error</>
          ) : props.isLoading ? (
            <Loading />
          ) : props.data ? (
            props.data.items.map(films => (
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

        {/* <div className="example">
          <Spin />
        </div> */}
      </ConfigProvider>
    </>
  );

}