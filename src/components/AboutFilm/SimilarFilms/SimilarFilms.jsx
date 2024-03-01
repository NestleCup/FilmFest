import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetSimilarsByIdQuery } from '../../../services/KinopoiskApi';
import Loading from '../../Loading/Loading';
import style from './SimilarFilms.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const SimilarFilms = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetSimilarsByIdQuery(kinopoiskId)
  return (
    <>
      <h3 className='title wrap'>Похожие</h3>
      <div className={style.wrapper}>
        <Swiper
          slidesPerView='auto'
          spaceBetween={40}
        >

          {error ? (
            <div>oh no errr</div>
          ) : isLoading ? (
            <Loading />
          ) : data ? (
            data.items.map(films => (
              <SwiperSlide className='res-slide' key={films.filmId}>
                <div className={style.container}>
                  <Link to={`/${films.filmId}`} className='film_link'>
                    <div className='film_poster'>
                      <img src={films.posterUrl} alt='Poster' />
                    </div>
                    <div className='film_hover'>
                      <p className='title'>{films.nameRu}</p>
                    </div>
                  </Link>
                </div>
                <div className={style.right_shadow} />

              </SwiperSlide>

            ))
          ) : null}
        </Swiper>

      </div>
    </>
  )
};

export default SimilarFilms;