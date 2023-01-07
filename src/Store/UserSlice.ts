import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Role {
  Customer,
  Instructor,
}

export interface Auth0User {
  name: string
  email?: string
  role?: Role
}

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    auth0User: null as Auth0User | null,
  },
  reducers: {
    logIn: (state, action: PayloadAction<{ name: string; email?: string }>) => {
      const { name, email } = action.payload
      state.auth0User = {
        name,
        email,
        role:
          email === 'lodarandrea@hotmail.com' ||
          email === 'balazs.orso@theitsolutions.io'
            ? Role.Instructor
            : Role.Customer,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn } = userSlice.actions

export default userSlice.reducer
