import React, { useState } from 'react'

import { Rate } from 'antd'
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom'
import { useGetTvShowsFilmsQuery } from '../../services/KinopoiskApi'
import uuid from 'react-uuid'
import PaginationFilms from '../PaginationFilms/PaginationFilms'
import { skeletonArray } from '../../utils/helpers/getSkeletonArray'

const Serials = () => {
  const [pages, setPages] = useState(1)

  const { data, error, isLoading } = useGetTvShowsFilmsQuery(pages)

  return (
    <>
      <div className="container">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <div className="block">{skeletonArray}</div>
        ) : data ? (
          data.items.map((items) => (
            <Link
              to={`/${items.kinopoiskId}`}
              key={uuid()}
              className="film__link"
            >
              <div className="film__poster">
                <img
                  src={items.posterUrl}
                  className="film__poster-img"
                  alt="Poster"
                />
              </div>
              <div className="film__hover">
                <Rate
                  allowHalf
                  count={5}
                  disabled={true}
                  defaultValue={getRate(Math.floor(items.ratingImdb))}
                />
                <div className="film__info">
                  <div className="film-info__title">
                    <p className="title">{items.nameRu}</p>
                  </div>
                  <div className="film-info__genre">
                    <span className="genre">
                      {items.genres.map((genre) => genre.genre).join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : null}
      </div>
      <div className="pagination">
        <PaginationFilms pages={pages} setPages={setPages} data={data} />
      </div>
    </>
  )
}

export default Serials
