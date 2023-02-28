import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Alidu in the Forest',
      author: 'Mudasir Issah',
    },
    {
      id: 2,
      title: 'Alidu in the Forest',
      author: 'Mudasir Issah',
    },
    {
      id: 3,
      title: 'Alidu in the Forest',
      author: 'Mudasir Issah',
    }
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
     state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
