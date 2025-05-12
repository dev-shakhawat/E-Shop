import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment} = userSlice.actions

export default userSlice.reducer
