import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slices/userSlice.js";
import languageSlice from "./slices/languageSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice,
        language: languageSlice
    },
})
