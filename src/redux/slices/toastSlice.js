import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    isShow: false,
    success: false,
    message: ''
}


export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {   
        notify: (state, action) => {
            state.isShow = action.payload.isShow;
            state.success = action.payload.success;
            state.message = action.payload.message;
        },
    },
})

// Action creators are generated for each case reducer function
export const {notify } = toastSlice.actions

export default toastSlice.reducer
