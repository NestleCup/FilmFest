import React, { useState } from 'react'
import { SwiperContainer } from '../SwiperContainer/SwiperContainer'
import { useGetFamilyCollectionQuery } from '../../services/KinopoiskApi'
import Loading from '../Loading/Loading'
import { SwiperSlide } from 'swiper/react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import style from './SwiperFamily.module.scss'
import classNames from 'classnames'

const SwiperFamily = () => {
  const [pages] = useState(1)

  const { data, error, isLoading } = useGetFamilyCollectionQuery(pages)
  return (
    <>
      <div className={classNames('wrap', style.blok__link)}>
        <Link to={`/movies/family`} className={classNames('title', style.link)}>
          Семейные
        </Link>
      </div>
      <SwiperContainer>
        {error ? (
          <div>oh no errr</div>
        ) : isLoading ? (
          <Loading />
        ) : data ? (
          data.items.map((films) => (
            <SwiperSlide className="res-slide" key={uuid()}>
              <div>
                <Link to={`/${films.kinopoiskId}`} className="film__link">
                  <div className="film__poster">
                    <img
                      src={films.posterUrl}
                      alt="Poster"
                      className="film__poster-img"
                    />
                  </div>
                  <div className="film__hover">
                    <p className="title">{films.nameRu}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : null}
      </SwiperContainer>
    </>
  )
}

export default SwiperFamily
