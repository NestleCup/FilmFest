import React from 'react';
import style from './Player.module.scss'
import { useGetFilmsVideosByIdQuery } from '../../../services/KinopoiskApi'
import { useParams } from 'react-router-dom';

const Player = () => {
  const { kinopoiskId } = useParams()

  const { data, error, isLoading } = useGetFilmsVideosByIdQuery(kinopoiskId)
  console.log(data);
  return (
    <div className='wrap'>
      <video controls width="550">
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Player;