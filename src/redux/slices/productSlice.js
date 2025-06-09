import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    detailedProduct: localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : null,
    carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        CurrentDetailedProduct: (state, action) => {
            state.detailedProduct = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {CurrentDetailedProduct } = productSlice.actions

export default productSlice.reducer
