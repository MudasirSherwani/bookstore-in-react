import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksApi';

const BookData = (props) => {
  const {
    keyValue, title, author, category,
  } = props;
  const dispatchBooks = useDispatch();
  const removeEvent = () => {
    dispatchBooks(removeBook(keyValue));
  };

  return (
    <div className="book-item">
      <div className="content">
        <div className="book-data">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="actions">
            <button className="button-outline" type="button">Comments</button>
            <div className="v-divider" />
            <button className="button-outline" type="button" onClick={removeEvent}>Remove</button>
            <div className="v-divider" />
            <button className="button-outline" type="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circ-progress-container">
            <div className="circ-progress" />
          </div>
          <div className="progress">
            <p className="percent">72%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="prog-divider" />
          <div className="chapter-container">
            <div>
              <p className="chapter-label">CURRENT CHAPTER</p>
              <p className="chapter">Introduction</p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookData.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};
export default BookData;
