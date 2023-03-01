import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [book, setBook] = useState();
  const dispatch = useDispatch();
  const update = (e) => {
    setBook(
      {
        ...book,
        item_id: uuidv4(),
        [e.target.name]: [e.target.value],
        category: 'Fiction',
      },
    );
  };
  return (
    <>
      <h2>Add new Book</h2>
      <form
        className="add-form"
        onSubmit={
         async (e) => {
          e.preventDefault();
          dispatch(addBooks(book, dispatch));
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
