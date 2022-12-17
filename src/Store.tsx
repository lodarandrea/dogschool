import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './Components/CustomerSlice'
import userSlice from './Components/UserSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    customer: customerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
