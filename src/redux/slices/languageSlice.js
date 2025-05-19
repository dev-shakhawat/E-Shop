import {createSlice} from '@reduxjs/toolkit'
import i18n from "../../../i18n.js"

const initialState = {
    value: null,
}


export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        lang: (state, action) => {
            state.value = action.payload;
            i18n.changeLanguage(action.payload.language);
        },
    },
})

// Action creators are generated for each case reducer function
export const {lang} = languageSlice.actions

export default languageSlice.reducer
