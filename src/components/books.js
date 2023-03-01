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
      {Object.keys(books).map((id) => (
        <Book 
        key={id} 
        title={books[id][0].title} 
        author={books[id][0].author} 
        category={books[id][0].category} 
        id={id} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
