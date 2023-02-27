import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
