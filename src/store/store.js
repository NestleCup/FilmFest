import { configureStore } from '@reduxjs/toolkit'
import {  KinopoiskApi} from '../services/KinopoiskApi'
import paginationReducer from './feature/pagination/paginationSlise'
import searchReducer from './feature/search/searchSlise'

// import filterReucer from './feature/filter/filterSlice'


const store =  configureStore({
  reducer: {
    // filterReucer: filterReucer,
    search: searchReducer,
    pagination: paginationReducer,
    [KinopoiskApi.reducerPath]: KinopoiskApi.reducer,
  },
  middleware: (gDM) => 
  gDM().concat(KinopoiskApi.middleware)
})  
export default store