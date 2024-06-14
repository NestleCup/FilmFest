import React from 'react'
import SwiperJenre from '../../components/SwiperJenre/SwiperJenre'
import SwiperMain from '../../components/SwiperMain/SwiperMain'
import SwiperFamily from '../../components/SwiperFamily/SwiperFamily'
import SwiperRomantic from '../../components/SwiperRomantic/SwiperRomantic'
import SwiperCatastrophe from '../../components/SwiperCatastrophe/SwiperCatastrophe'

const MoviesPage = () => {
  return (
    <>
      <section className="bg">
        <div className="position">
          <SwiperMain />
        </div>
        <SwiperJenre />
      </section>
      <section className="position">
        <SwiperFamily />
        <SwiperRomantic />
        <SwiperCatastrophe />
      </section>
    </>
  )
}
export default MoviesPage
