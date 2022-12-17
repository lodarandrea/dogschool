import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Components/UserSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
