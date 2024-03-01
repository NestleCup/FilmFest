import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetSimilarsByIdQuery } from '../../../services/KinopoiskApi';
import Loading from '../../Loading/Loading';
import style from './SimilarFilms.module.scss';
import uuid from 'react-uuid';
import { SwiperSlide } from 'swiper/react';
import { SwiperContainer } from '../../SwiperContainer/SwiperContainer';
import 'swiper/css';


const SimilarFilms = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetSimilarsByIdQuery(kinopoiskId)
  const docs = data?.items.length
console.log(docs);
  return (

    // { docs > 0 &&
    <SwiperContainer title='Похожие'>
      {error ? (
        <div>oh no errr</div>
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        data.items.map(films => (
          <SwiperSlide className='res-slide' key={uuid()}>
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
          </SwiperSlide>
        ))
      ) : null}
    </SwiperContainer> 
// }
    
  )
};

export default SimilarFilms;