import React, { useState } from 'react'
import { SwiperContainer } from '../SwiperContainer/SwiperContainer'
import { useGetRomanticFilmsQuery } from '../../services/KinopoiskApi'

import { SwiperSlide } from 'swiper/react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import style from './SwiperRomantic.module.scss'
import classNames from 'classnames'

const SwiperRomantic = () => {
  const [pages] = useState(1)
  const { data, error, isLoading } = useGetRomanticFilmsQuery(pages)

  return (
    <>
      <div className={classNames('wrap', style.blok__link)}>
        <Link
          to={`/movies/romantic`}
          className={classNames('title', style.link)}
        >
          Романтическая коллекция
        </Link>
      </div>
      <SwiperContainer>
        {error ? (
          <div>oh no errr</div>
        ) : isLoading ? (
          <>
            <div className="skeleton"></div>
            <div className="container">
              <div className="skeleton-swiper"></div>
              <div className="skeleton-swiper"></div>
              <div className="skeleton-swiper"></div>
              <div className="skeleton-swiper"></div>
              <div className="skeleton-swiper"></div>
            </div>
          </>
        ) : data ? (
          data.items.map((films) => (
            <SwiperSlide className="res-slide" key={uuid()}>
              <div>
                <Link to={`/${films.kinopoiskId}`} className="film__link">
                  <div className="film__poster">
                    <img
                      src={films.posterUrl}
                      className="film__poster-img"
                      alt="Poster"
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

export default SwiperRomantic
