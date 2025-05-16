import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todoSlice.js'

export const store = configureStore({
  reducer: todoReducer
  // we have to define in the store that, it has to allow the changes made in todoReducer
  // to be reflected in the main component
})