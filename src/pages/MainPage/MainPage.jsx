import React from 'react'
import style from './MainPage.module.scss'
import SwiperMain from '../../components/SwiperMain/SwiperMain'
import { TopFilms } from '../../components/TopFilms/TopFilms'
import icon from '../../assets/img/icon/top.png'
const MainPage = () => {
  return (
    <>
      <section className={style.main}>
        <div className="bg">
          <h1 className={style.title}>КиноФест - твой путь в мир кино!</h1>
          <SwiperMain />
        </div>
      </section>
      <section className="wrap">
        <div className={style.topFilm}>
          <div className={style.topFilm__title}>
            <p className="title">Топ коллекция</p>
            <div className={style.title__img}>
              <img src={icon} alt="icon" width={45} />
            </div>
          </div>
          <TopFilms />
        </div>
      </section>
    </>
  )
}

export default MainPage
