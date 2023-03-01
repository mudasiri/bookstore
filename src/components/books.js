import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './book';
import Form from './form';

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const { status } = useSelector((state) => state.books.status);
  const { error } = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <>loading...</>
    );
  }

  if (status === 'failed') {
    return (
      <>{error}</>
    );
  }
  return (
    <div className="container">
      {
        books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
          />
        ))
      }
      <Form />
    </div>
  );
}

export default Books;
