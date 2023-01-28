import React from 'react';
import AddBook from './AddBooksForm';
import BooksList from './BooksList';

const Books = () => (

  <div className="container">
    <BooksList />
    <div className="horizontal-divider" />
    <AddBook />
  </div>
);

export default Books;
