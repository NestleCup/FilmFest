import React, { useMemo, useState } from 'react'
import { useGetCatastropheFilmsQuery } from '../../services/KinopoiskApi'
import Loading from '../Loading/Loading'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import { getRate } from '../../utils/helpers/getRate'
import PaginationFilms from '../PaginationFilms/PaginationFilms'
import { skeletonArray } from '../../utils/helpers/getSkeletonArray'

const CatastropheFilms = () => {
  const [pages, setPages] = useState(1)
  const { data, error, isLoading } = useGetCatastropheFilmsQuery(pages)

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
      <p className="title">Катастрофы</p>
      <div className="container">
        {error ? (
          <div className="error">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="block">{skeletonArray}</div>
        ) : (
          docs.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/${item.kinopoiskId}`} className="film__link">
                <div className="film__poster">
                  <img
                    src={item.posterUrl}
                    className="film__poster-img"
                    alt="Poster"
                  />
                </div>
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

export default CatastropheFilms
