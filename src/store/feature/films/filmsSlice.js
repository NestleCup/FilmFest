import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const apiTopUrl = (process.env.REACT_APP_API_URL)
const apiKey = (process.env.REACT_APP_API_KEY)

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


export const { getTopFilms } = filmsSlice.actions
export default filmsSlice.reducer  