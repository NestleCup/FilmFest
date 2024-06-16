import React, { useMemo, useState } from 'react'
import { useGetRomanticFilmsQuery } from '../../services/KinopoiskApi'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import { getRate } from '../../utils/helpers/getRate'
import PaginationFilms from '../PaginationFilms/PaginationFilms'
import { skeletonArray } from '../../utils/helpers/getSkeletonArray'

const RomanticFilms = () => {
  const [pages, setPages] = useState(1)
  const { data, error, isLoading } = useGetRomanticFilmsQuery(pages)
  const docs = useMemo(
    () =>
      data?.items?.map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )
  return (
    <>
      <p className="title">Романтические фильмы</p>
      <div className="container">
        {error ? (
          <div className="err">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="block">{skeletonArray}</div>
        ) : (
          docs.map((item) => (
            <Link
              to={`/${item.kinopoiskId}`}
              key={item.id}
              className="film__link"
            >
              <div className="film__poster">
                <img
                  className="film__poster-img "
                  src={item.posterUrl}
                  alt="Poster"
                ></img>
              </div>
              <div className="film__hover">
                <Rate
                  allowHalf
                  count={5}
                  disabled={true}
                  defaultValue={getRate(Math.floor(item.ratingImdb))}
                />
                <div className="film__info">
                  <div className="film-info__title">
                    <p className="title">{item.nameRu}</p>
                  </div>
                  <div className="film-info__genre">
                    <span className="genre">
                      {item.genres.map((genre) => genre.genre).join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="pagination">
        <PaginationFilms pages={pages} setPages={setPages} data={data} />
      </div>
    </>
  )
}

export default RomanticFilms
