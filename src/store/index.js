import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import mapSlice from './mapSlice'

export default configureStore({
  reducer: {
      maps : mapSlice,
      auth: authSlice,
  }
})