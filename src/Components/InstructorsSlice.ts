import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { instructorsList } from '../model/Instructors'

export const instructorSlice = createSlice({
  name: 'instructor',

  initialState: {
    list: instructorsList,
    searchResult: instructorsList,
    searchText: '',
  },
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
      state.searchResult = state.list.filter(
        (elem) =>
          elem.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          elem.role.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
  },
})

export const { search } = instructorSlice.actions

export default instructorSlice.reducer
