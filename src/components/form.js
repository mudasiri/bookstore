import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { v4 as uuidv4 } from 'uuid';
import { add, addBooks } from '../redux/books/booksSlice';

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
           dispatch(add(book));
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
