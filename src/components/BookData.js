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
      <li>
        <h2>{title}</h2>
        <h2>{keyValue}</h2>
        <h4>{author}</h4>
        <h4>{category}</h4>
        <button type="button" onClick={removeEvent}>Remove</button>
      </li>
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
