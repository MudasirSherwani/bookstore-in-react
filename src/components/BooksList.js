import BookItem from './BookData';
import React from 'react';
import { useSelector } from 'react-redux';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">
      <ul>
        {books.books.map((bookData) => (
          <BookItem
            Title={bookData.Title}
            Author={bookData.Author}
            id={bookData.id}
            key={bookData.Id}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
