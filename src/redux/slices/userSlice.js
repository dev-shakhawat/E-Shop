import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authStatus: "register",
    user: null,
    profileActiveTab: "accountDetails"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        activeProfileTab: (state, action) => {
            state.profileActiveTab = action.payload
        },
        setauthStatus: (state, action) => {
            state.authStatus = action.payload;
        },
        userSet: (state, action) => {
            state.user = action.payload;
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {activeProfileTab , setauthStatus, userSet} = userSlice.actions

export default userSlice.reducer
