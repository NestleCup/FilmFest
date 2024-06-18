import React, { useState } from 'react'
import { SwiperContainer } from '../SwiperContainer/SwiperContainer'
import { useGetCatastropheFilmsQuery } from '../../services/KinopoiskApi'
import { SwiperSlide } from 'swiper/react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import style from './SwiperCatastrophe.module.scss'
import classNames from 'classnames'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const SwiperCatastrophe = () => {
  const [pages] = useState(1)
  const { data, error, isLoading } = useGetCatastropheFilmsQuery(pages)

  return (
    <>
      <div className={classNames('wrap', style.blok__link)}>
        <ScrollToTop />

        <Link
          to={`/movies/catastrophe`}
          className={classNames('title', style.link)}
        >
          Катастрофы
        </Link>
      </div>
      <SwiperContainer>
        {error ? (
          <div>oh no errr</div>
        ) : isLoading ? (
          <div className="container">
            <div className="skeleton-swiper"></div>
            <div className="skeleton-swiper"></div>
            <div className="skeleton-swiper"></div>
            <div className="skeleton-swiper"></div>
            <div className="skeleton-swiper"></div>
          </div>
        ) : data ? (
          data.items.map((films) => (
            <SwiperSlide className="res-slide" key={uuid()}>
              <div>
                <Link to={`/${films.kinopoiskId}`} className="film__link">
                  <div className="film__poster">
                    <img
                      className="film__poster-img "
                      src={films.posterUrl}
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

export default SwiperCatastrophe
