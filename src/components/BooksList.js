import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookData';
import { FetchBooksApi } from '../redux/books/booksApi';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  // console.log(books);
  useEffect(() => {
    dispatch(FetchBooksApi());
  },
  [dispatch]);

  return (
    <div className="BooksList">
      <ul>
        {books.map((book) => (
          <BookItem
            category={book.category}
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
