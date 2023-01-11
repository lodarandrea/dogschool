import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Role {
  Customer,
  Instructor,
}

export interface Auth0User {
  name: string
  email?: string
  role?: Role
  user_id?: string
}

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    auth0User: null as Auth0User | null,
  },
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{ name: string; email?: string; user_id?: string }>
    ) => {
      const { name, email, user_id } = action.payload
      state.auth0User = {
        name,
        email,
        user_id,
        role:
          user_id === 'auth0|63bebd81717172a34118351d' ||
          user_id === 'auth0|63b29e7413e9c360c2b4e429'
            ? Role.Instructor
            : Role.Customer,
      }
    },
  },
})

export const { logIn } = userSlice.actions

export default userSlice.reducer
