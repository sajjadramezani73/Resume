import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from './aboutSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
    reducer: {
        about: aboutReducer,
        theme: themeReducer
    },
})