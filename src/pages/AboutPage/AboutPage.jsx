import React from 'react'
import AboutFilm from '../../components/AboutFilm/AboutFilm'
import { Divider } from 'antd'
import Actors from '../../components/AboutFilm/Actors/Actors'
import Reviews from '../../components/AboutFilm/Reviews/Reviews'
import SimilarFilms from '../../components/AboutFilm/SimilarFilms/SimilarFilms'
import Player from '../../components/AboutFilm/Player/Player'
import Frames from '../../components/AboutFilm/Frames/Frames'
import Sources from '../../components/AboutFilm/Sources/Sources'

const AboutPage = () => {
  return (
    <>
      <AboutFilm />
      <div className="wrap">
        <Divider />
      </div>
      <Player />
      <Sources />
      <Actors />
      <Reviews />
      <SimilarFilms />
      <Frames />
    </>
  )
}
export { AboutPage }
