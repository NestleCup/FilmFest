import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {apiTopUrl , apiKey} from '../../../utils/const/api'



export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async () => {
     const response = await fetch(apiTopUrl, {
            headers: {
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json',
            },
        })
        const formattedResponse = await response.json()
        return formattedResponse   
    }
)
const initialState = {
    topFilms: [],
    isLoading: false,
    
}
export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchFilms.pending]: (state) => {
            state.isLoading = true
        },
        [fetchFilms.fulfilled]: (state, actions) => {
            state.topFilms = actions.payload
            state.isLoading = false
        },
        [fetchFilms.rejected]: (state) => {
            state.isLoading = true
         },
    }
}
)

export const selectStatusName = filmsSlice.isLoading
export const selectStatusData = filmsSlice.topFilms
export const { getTopFilms } = filmsSlice.actions
export default filmsSlice.reducer  