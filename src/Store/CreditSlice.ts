import { createSlice } from '@reduxjs/toolkit'

export const creditSlice = createSlice({
  name: 'credit',

  initialState: {
    credit: 0,
  },
  reducers: {
    Increment10: (state) => {
      state.credit += 10
    },

    Increment25: (state) => {
      state.credit += 25
    },

    Increment50: (state) => {
      state.credit += 50
    },
  },
})

export const { Increment10, Increment25, Increment50 } = creditSlice.actions

export default creditSlice.reducer
