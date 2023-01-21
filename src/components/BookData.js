import React from 'react';

const BookData = ({ Title, Author, Category }) => (
  <div className="book-item">
    <li>
      <h3>{Category}</h3>
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <button type="button">Remove</button>
    </li>
  </div>
);

export default BookData;
