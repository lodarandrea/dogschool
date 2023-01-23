import { createSlice } from '@reduxjs/toolkit'

interface Credit {
  value: number
}

export const creditSlice = createSlice({
  name: 'credit',

  initialState: {
    value: 0,
  } as Credit,
  reducers: {
    Increment10: (state) => {
      state.value += 10
    },

    Increment25: (state) => {
      state.value += 25
    },

    Increment50: (state) => {
      state.value += 50
    },
  },
})

export const { Increment10, Increment25, Increment50 } = creditSlice.actions

export default creditSlice.reducer
