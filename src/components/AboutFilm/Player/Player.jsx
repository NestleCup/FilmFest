import React from 'react'
import style from './Player.module.scss'
import { useGetFilmsVideosByIdQuery } from '../../../services/KinopoiskApi'
import { useParams } from 'react-router-dom'
import player from '../../../assets/img/icon/player.png'

const Player = () => {
  const { kinopoiskId } = useParams()

  const { data } = useGetFilmsVideosByIdQuery(kinopoiskId)
  const item = data?.items[1]?.url

  return data?.items?.length ? (
    <div className="wrap">
      <a href={item} target="_blank" rel="noreferrer">
        <div className={style.bg}>
          <img src={player} alt="" />
        </div>
      </a>
    </div>
  ) : null
}

export default Player
