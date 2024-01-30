import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState,
//     reducers: {
//       setCategoryId(satte, action){
//         state.categoryId = action.payload
//       }
//     }
// })

// export const {  } = filterSlice.actions
// export default filterSlice.reducer  
