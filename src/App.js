import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import SerialsPage from './pages/SerialsPage/SerialsPage';
import CartoonsPage from './pages/CartoonsPage/CartoonsPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import './style/_global.css';
import './style/_cardFilm.css';

import { AboutPage } from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index
          element={<MainPage />
          } />
        <Route path="/:kinopoiskId"
          element={<AboutPage />
          } />

        <Route path="/:keyword"
          element={<SearchPage />
          } />  <Route path="/movies/:category"
            element={<CategoryPage />
            } />
        <Route path="movies"
          element={<MoviesPage />
          } />

        <Route path="serials"
          element={<SerialsPage />
          } />
        <Route path="cartoons"
          element={<CartoonsPage />
          } />
        {/* <Route path=""
          element={<SearchPage />
          } /> */}
      </Route>
    </Routes>


  )
}

export default App;