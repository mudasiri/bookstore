import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';

function Form() {
  const { books } = useSelector((state) => state.books);
  const [book, setBook] = useState();
  const dispatch = useDispatch();
  const update = (e) => {
    setBook(
      {
        ...book,
        id: books.length + 1,
        [e.target.name]: [e.target.value],
      },
    );
  };
  return (
    <>
      <h2>Add new Book</h2>
      <form
        className="add-form"
        onSubmit={
        (e) => {
          e.preventDefault();
          dispatch(add(book));
          e.target.reset();
        }
      }
      >
        <input className="input title-input" type="text" name="title" onChange={(e) => update(e)} placeholder="Enter book title" />
        <input className="input category-input" type="text" name="author" onChange={(e) => update(e)} placeholder="Enter book Author" />
        <button className="primary-button-big" type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;
