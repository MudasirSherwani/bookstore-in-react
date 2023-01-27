import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookData';

const BooksList = () => {
  const data = useSelector((state) => state.books);
  return (
    <div className="book-list">
      <ul>
        {data.books.map((book) => (
          <BookItem
            title={book.title}
            author={book.author}
            keyValue={book.keyValue}
            key={book.keyValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
