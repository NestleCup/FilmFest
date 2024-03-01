import style from './Actor.module.scss'
import { SwiperSlide } from 'swiper/react';
import Loading from '../../Loading/Loading';
import { useGetActorsByIdQuery } from '../../../services/KinopoiskApi'
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { SwiperContainer } from '../../SwiperContainer/SwiperContainer';
const Actors = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetActorsByIdQuery(kinopoiskId)

  return (
    <SwiperContainer title='Актеры и создатели'>
      {error ? (
        <div>oh no errr</div>
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        data.map(item => (
          item.nameRu &&
          <SwiperSlide  key={uuid()}>
            <div className={style.container} >
              <div className={style.profile_img}>
                <img src={item.posterUrl} alt='profile' />
              </div>
              <div className={style.subtitle}>
                <p>{item.nameRu}</p>
                <p className={style.profession}>{item.professionText.slice(0, -1)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : null}
    </SwiperContainer>
  )

};

export default Actors;