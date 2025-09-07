import {createSlice} from '@reduxjs/toolkit'



const initialState = { 
    carts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    subtotalPrice: 0,
    filter: false,
    categories: [],
    brands: []
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
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
        brandSet: (state, action) => {
            state.brands = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { checkoutPrice , addToCart , filterMobile , categorySet , brandSet } = productSlice.actions

export default productSlice.reducer
