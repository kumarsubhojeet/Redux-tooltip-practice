import { configureStore } from '@reduxjs/toolkit'
import cocktailSlice from './redux/Slice/cocktailSlice'

export const Store = configureStore({
  reducer: {
    app:cocktailSlice
  },
})