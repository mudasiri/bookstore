import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, removeBook } from '../redux/books/booksSlice';

function Book({ ...book }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <h4>{book.category}</h4>
      <button type="button" onClick={() => { dispatch(remove(book.id)); dispatch(removeBook(book.id)); }}>Remove</button>
      <div className="horizontal-divider" />
    </div>
  );
}

export default Book;
