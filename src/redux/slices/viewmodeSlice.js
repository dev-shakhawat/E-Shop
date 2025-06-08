import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 'grid',
}


export const viewmodeSlice = createSlice({
    name: 'viewmode',
    initialState,
    reducers: {
        currentMode: (state, action) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {currentMode} = viewmodeSlice.actions

export default viewmodeSlice.reducer
