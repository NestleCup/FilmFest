import React, { useMemo, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { Rate } from 'antd'
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { useGetTopFilmsQuery } from '../../services/KinopoiskApi'
import PaginationFilms from '../PaginationFilms/PaginationFilms'
import { skeletonArray } from '../../utils/helpers/getSkeletonArray'
export function TopFilms() {
  const [pages, setPages] = useState(1)

  const { data, error, isLoading, isFetching } = useGetTopFilmsQuery(pages)

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
      <div className="container">
        {error ? (
          <p className="error">Oh no, there was an error</p>
        ) : isLoading || isFetching ? (
          <>
            <div className="skeleton"></div>
            <div className="block">{skeletonArray}</div>
          </>
        ) : (
          docs.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/${item.kinopoiskId}`} className="film__link">
                <LazyLoad height={200}>
                  <div className="film__poster">
                    <img
                      src={item.posterUrl}
                      className="film__poster-img"
                      alt="Poster"
                    />
                  </div>
                </LazyLoad>
                <div className="film__hover">
                  {item.ratingKinopoisk === null || (
                    <Rate
                      allowHalf
                      count={5}
                      disabled={true}
                      defaultValue={getRate(Math.floor(item.ratingKinopoisk))}
                    />
                  )}
                  <div className="film__info">
                    <div>
                      <p className="film-info__title">{item.nameRu}</p>
                    </div>
                    <div className="film-info__genre">
                      <span className="genre">
                        {item.genres.map((genre) => genre.genre).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))
        )}
      </div>
      <div className="pagination">
        <PaginationFilms pages={pages} setPages={setPages} data={data} />
      </div>
    </>
  )
}
