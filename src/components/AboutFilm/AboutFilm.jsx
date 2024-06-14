import { useState } from 'react'
import style from './AboutFilm.module.scss'
import { useGetFilmsByIdQuery } from '../../services/KinopoiskApi'
import { Typography, ConfigProvider } from 'antd'
import { useParams } from 'react-router-dom'
import imdb from '../../assets/img/icon/imdb.png'
import kinopoisk from '../../assets/img/icon/kinopoisk.png'

const { Paragraph } = Typography

const AboutFilm = () => {
  const { kinopoiskId } = useParams()
  const { data, error, isLoading } = useGetFilmsByIdQuery(kinopoiskId)
  const [ellipsis] = useState(true)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#fa4d4d',
          colorText: 'white',
          fontSize: 20,
          fontFamilyCode: 'Jura',
        },
      }}
    >
      {error ? (
        <p className="error">Error</p>
      ) : isLoading ? (
        <div>Loading</div>
      ) : data ? (
        <div className={style.container}>
          {data.coverUrl ? (
            <div
              className={style.background}
              style={{ backgroundImage: `url('${data.coverUrl}')` }}
            ></div>
          ) : (
            <div className={style.mask__blure}></div>
          )}

          <div className={style.mask}>
            <div className="wrap">
              <div className={style.block}>
                {data.logoUrl ? (
                  <div className={style.logo}>
                    <img src={data.logoUrl} alt="logo" />
                  </div>
                ) : (
                  <h2>{data.nameRu}</h2>
                )}
                <div className="flex">
                  <div className={style.rating}>
                    <div className={style.icon__rating}>
                      <img src={kinopoisk} alt="imdb" />
                    </div>
                    <p>{data?.ratingKinopoisk}</p>
                  </div>
                  <div className={style.rating}>
                    <div className={style.icon__rating}>
                      <img src={imdb} alt="imdb" />
                    </div>
                    <p>{data?.ratingImdb}</p>
                  </div>
                </div>
                <div className={style.about}>
                  <span className={style.about__year}>{data.year} г</span>
                  <span className={style.about__year}>
                    {data.genres.map((genre) => genre.genre).join(' , ')}
                  </span>
                  <span className={style.about__year}>
                    {data.countries
                      .map((country) => country.country)
                      .join(' , ')}
                  </span>
                </div>
                <div className={style.slogan}>
                  <span className={style.slogan}>{data.slogan}</span>
                </div>
                <div className={style.description}>
                  <Paragraph
                    style={{ fontFamily: 'Jura' }}
                    ellipsis={
                      ellipsis
                        ? { rows: 2, expandable: true, symbol: 'подробнее' }
                        : false
                    }
                  >
                    {data.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ConfigProvider>
  )
}

export default AboutFilm
