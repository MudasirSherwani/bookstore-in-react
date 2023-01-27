import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookData';

const BooksList = () => {
  const data = useSelector((state) => state.books);

  return (
    <div className="book-list">
      <ul>
        {data.map((book) => (
          <BookItem
            Title={book.Title}
            Author={book.Author}
            key={book.key}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
