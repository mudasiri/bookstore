import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    status:'',
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      state.status = 'Under Construction' ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { status } = categoriesSlice.actions

export default categoriesSlice.reducer