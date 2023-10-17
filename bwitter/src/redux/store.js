// store.js untuk ngumpulin slice-slice

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})