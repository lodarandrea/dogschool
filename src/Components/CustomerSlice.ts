import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { customersList } from '../model/Customer'

export const customerSlice = createSlice({
  name: 'customer',

  initialState: {
    list: customersList,
    searchResult: customersList,
    searchText: '',
  },
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
      state.searchResult = state.list.filter(
        (elem) =>
          elem.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          elem.dog.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { search } = customerSlice.actions

export default customerSlice.reducer
