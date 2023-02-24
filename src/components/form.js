import React from 'react';

function Form() {
  return (
    <>
      <h2>Add new Book</h2>
      <form className="form">
        <input type="text" placeholder="Enter book title" />
        <input type="text" placeholder="Enter book Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;
