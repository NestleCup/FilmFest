import HeaderPart from './components/Header/HeaderPart';
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/content/MoviesPage/MoviesPage';
import SerialsPage from './components/content/SerialsPage/SerialsPage';
import CartoonsPage from './components/content/CartoonsPage/CartoonsPage';
import MainPage from './components/content/Main/MainPage';


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
         
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;