import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slices/userSlice.js";
import languageSlice from "./slices/languageSlice.js";
import viewmodeSlice from './slices/viewmodeSlice.js';
import paginationSlice from './slices/paginationSlice.js';

export const store = configureStore({
    reducer: {
        user: userSlice,
        language: languageSlice,
        viewmode: viewmodeSlice,
        pagination: paginationSlice
    },
})
