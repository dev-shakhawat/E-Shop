import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    detailedProduct: localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : null,
    carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    subtotalPrice: 0
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        CurrentDetailedProduct: (state, action) => {
            state.detailedProduct = action.payload;
        },
        checkoutPrice: (state, action) => {
            state.subtotalPrice = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {CurrentDetailedProduct , checkoutPrice } = productSlice.actions

export default productSlice.reducer
