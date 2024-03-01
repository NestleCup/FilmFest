import style from './Actor.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../../Loading/Loading';
import { useGetActorsByIdQuery } from '../../../services/KinopoiskApi'
import { useParams } from 'react-router-dom';

const Actors = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetActorsByIdQuery(kinopoiskId)
  return (
    <>
      <h3 className='wrap title'>
        Актеры и создатели
      </h3 >
      <div className={style.wrapper}>
        <div className={style.left_shadow} />
        <Swiper
          freeMode={true}
          slidesPerView={5.5}
          freeModeMomentum={false}
          mousewheel={true}

        >
          {error ? (
            <div>oh no errr</div>
          ) : isLoading ? (
            <Loading />
          ) : data ? (
            data.map(item => (
              item.nameRu &&
              <SwiperSlide key={item.staffId}>
                <div className={style.container}>
                  <div className={style.profile_img}>
                    <img src={item.posterUrl} alt='profile' />
                  </div>
                  <p>{item.nameRu}</p>
                  <p className={style.profession}>{item.professionText.slice(0, -1)}</p>
                </div>
              </SwiperSlide>
            ))
          ) : null}
        </Swiper >
        <div className={style.right_shadow} />
      </div>
    </>

  )

};

export default Actors;