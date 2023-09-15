import HeaderPart from './components/Header/HeaderPart';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiFilms from './components/Content/PageFilm/ApiFilms';
import Movies from './components/Content/MoviesPage/MoviesPage';
import SerialsPage from './components/Content/SerialsPage/SerialsPage';
import CartoonsPage from './components/Content/CartoonsPage/CartoonsPage';
import MainPage from './components/Content/Main/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderPart />

        <main className='app-wrapper-content'>
          <div className='app-wrapper-size'>
            <Routes>
              <Route path="/main/*"
                element={<MainPage />
                } />
              <Route path="/movies/*"
                element={<Movies />
                } />
              <Route path="/serials/*"
                element={<SerialsPage />
                } />
              <Route path="/cartoons/*"
                element={<CartoonsPage />
                } />
            </Routes>
            <ApiFilms />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;