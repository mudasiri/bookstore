import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

function Books() {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
