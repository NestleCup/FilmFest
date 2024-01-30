import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filmsSearch: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState, 
  reducers: {
    searchFilms: (state, action) => {
      state.filmsSearch = action.payload
    },
    clearSearchFilms: (state) => {
      state.filmsSearch = ''
    }
  }
})
export const { searchFilms, clearSearchFilms } = searchSlice.actions
export default searchSlice.reducer  