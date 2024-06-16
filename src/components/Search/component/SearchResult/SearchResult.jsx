import React, { useMemo } from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import { skeletonArray } from '../../../../utils/helpers/getSkeletonArray'

const SearchResult = ({ data, search, isLoading }) => {
  const docs = useMemo(
    () =>
      data?.films?.map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )
  return !data?.films?.length && search.length ? (
    <p className="error">Ничего не найдено</p>
  ) : isLoading ? (
    <div className="block">{skeletonArray}</div>
  ) : (
    docs.map((item) => (
      <React.Fragment key={item.id}>
        {item?.nameRu ? (
          <Link to={`/${item.filmId}`} className="film__link">
            <div className="film__poster">
              <img
                className="film__poster-img"
                src={item.posterUrl}
                alt="Poster"
              />
            </div>
            <div className="film__hover">
              {item.rating === null || (
                <Rate
                  allowHalf
                  count={5}
                  disabled={true}
                  defaultValue={Math.floor(item.rating)}
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
        ) : null}
      </React.Fragment>
    ))
  )
}

export default SearchResult
