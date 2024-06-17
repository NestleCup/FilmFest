import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import SerialsPage from './pages/SerialsPage/SerialsPage'
import CartoonsPage from './pages/CartoonsPage/CartoonsPage'
import JenrePage from './pages/JenrePage/JenrePage'
import './style/_global.css'
import './style/_cardFilm.css'

import { AboutPage } from './pages/AboutPage/AboutPage'
import Layout from './components/Layout/Layout'
import SearchPage from './pages/SearchPage/SearchPage'
import FamilyPage from './pages/FamilyPage/FamilyPage'
import RomanticPage from './pages/RomanticPage/RomanticPage'
import CatastrophePage from './pages/CatastrophePage/CatastrophePage'
import ModalWindow from './components/AboutFilm/Reviews/ModalWindow/ModalWindow'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:kinopoiskId" element={<AboutPage />} />
        <Route path="/reviews" element={<ModalWindow />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:category" element={<JenrePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/family" element={<FamilyPage />} />
        <Route path="/movies/romantic" element={<RomanticPage />} />
        <Route path="/movies/catastrophe" element={<CatastrophePage />} />
        <Route path="/serials" element={<SerialsPage />} />
        <Route path="/cartoons" element={<CartoonsPage />} />
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/404" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
