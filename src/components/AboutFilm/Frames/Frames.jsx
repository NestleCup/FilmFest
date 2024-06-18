import React, { useMemo } from 'react'
import { useGetImagesByFilmsIdQuery } from '../../../services/KinopoiskApi'
import { useParams } from 'react-router-dom'
import style from './Frames.module.scss'
import classNames from 'classnames'
import { Image } from 'antd'
import uuid from 'react-uuid'

const Frames = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetImagesByFilmsIdQuery(kinopoiskId)

  const slisedData = useMemo(
    () =>
      data?.items?.slice(0, 3).map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )

  return data?.items?.length ? (
    <>
      <p className="title wrap">Кадры из фильма</p>
      {error ? (
        <div className="error">oh no errr</div>
      ) : isLoading ? (
        <div className="container">
          <div className="skeleton-swiper"></div>
          <div className="skeleton-swiper"></div>
          <div className="skeleton-swiper"></div>
          <div className="skeleton-swiper"></div>
          <div className="skeleton-swiper"></div>
        </div>
      ) : data ? (
        <div className={classNames('wrap', style.container)}>
          {slisedData.map((item) => (
            <div key={item.id} className={style.img}>
              <Image height={390} src={item.imageUrl} alt="Кадр" />
            </div>
          ))}
        </div>
      ) : null}
    </>
  ) : null
}

export default Frames
