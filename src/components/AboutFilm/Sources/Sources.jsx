import { useGetExternalSourcesByFilmsIdQuery } from '../../../services/KinopoiskApi'
import style from './Sources.module.scss'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'
import { useMemo } from 'react'
import uuid from 'react-uuid'

const Sources = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } =
    useGetExternalSourcesByFilmsIdQuery(kinopoiskId)
  const docs = useMemo(
    () =>
      data?.items?.slice(0, 2).map((item) => ({
        id: uuid(),
        ...item,
      })),
    [data]
  )
  return data?.items?.length ? (
    <div className={classNames('wrap', style.container)}>
      <p className="title">Полную версию вы можете увидеть здесь</p>
      {error ? (
        <div className="error">Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        docs.map((item) => (
          <a
            href={item.url}
            target="_blank "
            key={item.id}
            className={style.img}
          >
            <img src={item.logoUrl} alt="" />
          </a>
        ))
      )}
    </div>
  ) : null
}

export default Sources
