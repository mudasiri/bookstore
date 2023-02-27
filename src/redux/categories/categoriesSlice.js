/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  checkStatus: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      state.checkStatus = 'Under Construction';
    },
  },
});

// Action creators are generated for each case reducer function
export const status = categoriesSlice.actions;

export default categoriesSlice.reducer;
