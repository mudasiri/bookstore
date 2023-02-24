import React from 'react';
import Book from './book';
import Form from './form';

function Books() {
  const books = [
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
    },
  ];
  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
