import React from 'react';

function Book({ ...book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <button type="button">Remove</button>
      <div className="horizontal-divider" />
    </div>
  );
}

export default Book;
