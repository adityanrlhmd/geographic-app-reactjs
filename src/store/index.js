import { configureStore } from '@reduxjs/toolkit'
import mapSlice from './mapSlice'

export default configureStore({
  reducer: {
      maps : mapSlice,
  }
})