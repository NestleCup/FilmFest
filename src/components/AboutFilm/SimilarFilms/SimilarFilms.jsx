import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetSimilarsByIdQuery } from '../../../services/KinopoiskApi'
import Loading from '../../Loading/Loading'
import uuid from 'react-uuid'
import { SwiperSlide } from 'swiper/react'
import { SwiperContainer } from '../../SwiperContainer/SwiperContainer'
import 'swiper/css'

const SimilarFilms = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetSimilarsByIdQuery(kinopoiskId)
  const docs = useMemo(
    () =>
      data?.items?.map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )

  return data?.items?.length ? (
    <SwiperContainer title="Похожие">
      {error ? (
        <div className="error">oh no errr</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        docs.map((films) => (
          <SwiperSlide className="res-slide" key={uuid()}>
            <Link to={`/${films.filmId}`} className="film__link">
              <div className="film__poster">
                <img
                  src={films.posterUrl}
                  className="film__poster-img "
                  alt="Poster"
                />
              </div>
              <div className="film__hover">
                <p className="title">{films.nameRu}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))
      )}
    </SwiperContainer>
  ) : null
}

export default SimilarFilms
