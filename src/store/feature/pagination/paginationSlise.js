import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pageCount: 1,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPageCount: (state, action) => {
            state.pageCount = action.payload
        }
    }
})

export const { setPageCount } = paginationSlice.actions
export default paginationSlice.reducer  


