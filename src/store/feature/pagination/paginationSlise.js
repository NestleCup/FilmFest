import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPerPage: 20,
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageCount: (state, action) => {
      state.pageCount = action.payload
    },
  },
})

export const { setPageCount } = paginationSlice.actions
export default paginationSlice.reducer
