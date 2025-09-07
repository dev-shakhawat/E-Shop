import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    detailedProduct: localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : null,
    carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    subtotalPrice: 0,
    filter: false,
    categories: [],
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        CurrentDetailedProduct: (state, action) => {
            state.detailedProduct = action.payload;
        },
        checkoutPrice: (state, action) => {
            let totalprice = 0;
            const allcarts = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
            if(allcarts.length > 0){
                allcarts.map(item => {
                    totalprice += item.totalPrice
                })
            }
            state.subtotalPrice = totalprice
        },
        addToCart: (state, action) => {
            state.carts = action.payload;
        },
        filterMobile: (state, action) => {
            state.filter = action.payload;
        },
        categorySet: (state, action) => {
            state.categories = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {CurrentDetailedProduct , checkoutPrice , addToCart , filterMobile , categorySet } = productSlice.actions

export default productSlice.reducer
