import { configureStore } from '@reduxjs/toolkit'
import creditSlice from './CreditSlice'
import userSlice from './UserSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    credit: creditSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
