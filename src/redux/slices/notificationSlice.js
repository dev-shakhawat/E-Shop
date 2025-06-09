import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
}


export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notify: (state, action) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {notify} = notificationSlice.actions

export default notificationSlice.reducer
