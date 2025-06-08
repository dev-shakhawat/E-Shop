import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 1,
    totalPagination: 5
}


export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        currentPagination: (state, action) => {
            state.value = action.payload;
        },
        totalPagination: (state, action) => {
            state.totalPagination = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {currentPagination , totalPagination} = paginationSlice.actions

export default paginationSlice.reducer
