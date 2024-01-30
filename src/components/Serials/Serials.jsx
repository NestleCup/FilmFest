import React from 'react';
import style from './Serials.module.scss'

import { Rate, Typography, ConfigProvider } from 'antd';
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom';
import { useGetTvShowsFilmsQuery } from '../../services/KinopoiskApi';
import Loading from '../Loading/Loading';

const { Title } = Typography;

const Serials = () => {
  const { data, error, isLoading } =useGetTvShowsFilmsQuery ();

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
          <Loading/>
        ) : data ? (
          data.items.map(items => (
            <Link to={`/${items.kinopoiskId}`} key={items.kinopoiskId} className={style.filmCard}>
              <div className={style.filmCardImg}>
                <img src={items.posterUrl} alt='Poster'></img>
              </div>
              <div className={style.filmCardHover}>
                <Rate allowHalf
                  count={5}
                  disabled={true}
                  defaultValue={getRate(Math.floor(items.ratingImdb))} />
                <div className={style.filmCardInfo}>
                  <div className={style.filmCardTitle}>
                    <Title level={3} className={style.title}>{items.nameRu}</Title>
                  </div>
                  <div className={style.filmCardGenre}>
                    <span className={style.genres}>{items.genres.map(
                      (genre) => genre.genre).join(', ')}</span>
                  </div>
                </div>
              </div>
            </Link>

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
};

export default Serials;