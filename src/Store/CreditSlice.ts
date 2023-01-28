import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Credit {
  value: number
}

export const creditSlice = createSlice({
  name: 'credit',

  initialState: {
    value: 0,
  } as Credit,
  reducers: {
    Increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { Increment } = creditSlice.actions

export default creditSlice.reducer
