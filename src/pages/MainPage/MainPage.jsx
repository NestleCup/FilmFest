import React, { useState } from 'react';
import style from './MainPage.module.scss'
import { useGetTopFilmsQuery } from '../../services/KinopoiskApi';
import { Typography, ConfigProvider } from 'antd';
import SwiperContent from '../../components/SwiperContent/SwiperContent';
import { TopFilms } from '../../components/TopFilms/TopFilms';
import PaginationFilms from '../../components/PaginationFilms/PaginationFilms';

const { Title } = Typography;

const MainPage = () => {
  const [pages, setPages] = useState(1)
  const { data, error, isLoading } = useGetTopFilmsQuery(pages);
  return (

    <ConfigProvider
      theme={{
        token: {
          colorText: 'white',
          Pagination: {
            colorTextDisabled: 'red',
            colorText: 'white',
            colorPrimaryHover: 'red',
            colorPrimary: 'red'
          },
        },
      }}
    >
      <section className={style.main} >
        <div className='bg' >
            <div className={style.position}>
              <div className={style.title}>
                <h1>
                  Добро пожаловать на Кинофест -
                  онлайн кинотеатр более чем 960 фильмов!
                </h1>
              </div>
              <div className={style.swiper}>
                <SwiperContent
                  data={data}
                  error={error}
                  isLoading={isLoading} />
              </div>
            </div>
        </div>
      </section >
      <section className='wrap'>
        <div className={style.topFilm}>
          <Title level={2}>Топ коллекция</Title>
          <TopFilms
            data={data}
            error={error}
            isLoading={isLoading} />
        </div>
      </section>
      <div className={style.paginate}>
        <PaginationFilms
          data={data}
          error={error}
          isLoading={isLoading}
          pages={pages}
          setPages={setPages}
        />
      </div>
    </ConfigProvider>
  );
};

export default MainPage;
