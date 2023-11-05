import { configureStore } from '@reduxjs/toolkit'
import {  KinopoiskApi} from '../services/KinopoiskApi'
import filmsReducer from './feature/films/filmsSlice'
import paginationReducer from './feature/pagination/paginationSlise'

const store =  configureStore({
  reducer: {
    // films: filmsReducer,
    // pagination: paginationReducer,
    [KinopoiskApi.reducerPath]: KinopoiskApi.reducer,
  },
  middleware: (gDM) => 
  gDM().concat(KinopoiskApi.middleware)
})  
export default store