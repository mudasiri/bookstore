import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, removeBook } from '../redux/books/booksSlice';

function Book({ ...book }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
        <h4 className="book-category">{book.category}</h4>
        <h2 className="book-title">{book.title}</h2>
      <h6 className="book-author">{book.author}</h6>
      <div className="action-buttons">

      <button className="button-outline" type="button">Comments</button>
      <div className="vertical-divider"></div>
      <button className="button-outline" type="button" >Edit</button>
      <div className="vertical-divider"></div>
      <button className="button-outline" type="button" onClick={() => { dispatch(remove(book.id)); dispatch(removeBook(book.id)); }}>Remove</button>
      </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress">
              </div>
              </div>
              <div className="progress-stat">
                <p className="percent-complete">64%</p>
                <p className="completed">Completed</p>
                </div>
                <div className="progress-divider">
                  </div>
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">Chapter 17</p>
                      </div>
                      <div>
                        <button className="primary-button" type="button">UPDATE PROGRESS</button>
                        </div>
                        </div>
                        </div>
      </div>
    </div>
  );
}

export default Book;
