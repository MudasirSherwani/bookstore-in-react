import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookData = (props) => {
  const { key, Title, Author } = props;
  const dispatchBooks = useDispatch();
  const removeEvent = () => {
    dispatchBooks(removeBook(key));
  };

  return (
    <div className="book-item">
      <li>
        <h2>{Title}</h2>
        <h2>{key}</h2>
        <h4>{Author}</h4>
        <button type="button" onClick={removeEvent}>Remove</button>
      </li>
    </div>
  );
};

BookData.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
export default BookData;
