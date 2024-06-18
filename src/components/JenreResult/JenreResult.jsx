import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetJenreFilmByNumberQuery } from '../../services/KinopoiskApi'
import { Rate } from 'antd'
import { getRate } from '../../utils/helpers/getRate'
import { Link } from 'react-router-dom'
import PaginationFilms from '../PaginationFilms/PaginationFilms'
import uuid from 'react-uuid'
import { skeletonArray } from '../../utils/helpers/getSkeletonArray'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const JenreResult = () => {
  const { category } = useParams()
  const [pages, setPages] = useState(1)

  const { data, error, isLoading } = useGetJenreFilmByNumberQuery({
    category,
    pages,
  })
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
      <ScrollToTop />
      <div className="container position">
        {error ? (
          <div className="err">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="block">{skeletonArray}</div>
        ) : (
          docs.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={`/${item.kinopoiskId}`} className="film__link">
                <div className="film__poster">
                  <img
                    src={item.posterUrl}
                    className="film__poster-img "
                    alt="Poster"
                  ></img>
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
            </React.Fragment>
          ))
        )}
      </div>
      <div className="pagination">
        <PaginationFilms data={data} pages={pages} setPages={setPages} />
      </div>
    </>
  )
}

export default JenreResult
