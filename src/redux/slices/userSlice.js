import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
    profileActiveTab: "accountDetails"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        activeProfileTab: (state, action) => {
            state.profileActiveTab = action.payload
        }
        
    },
})

// Action creators are generated for each case reducer function
export const {activeProfileTab} = userSlice.actions

export default userSlice.reducer
