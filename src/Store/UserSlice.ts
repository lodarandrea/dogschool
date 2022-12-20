import { createSlice } from '@reduxjs/toolkit'

export enum Role {
  Customer,
  Instructor,
}

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    role: Role.Instructor,
  },
  reducers: {
    changeUserRole: (state) => {
      state.role = Role.Customer
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeUserRole } = userSlice.actions

export default userSlice.reducer
