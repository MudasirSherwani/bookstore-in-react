import { createAsyncThunk } from '@reduxjs/toolkit';
const ADD_BOOK = 'redux/books/BOOK_ADDED';
const REMOVE_BOOK = 'redux/books/BOOK_REMOVED';
const GET_BOOK = 'books/books/GET_BOOK';
const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jPx8Mihfhi8LHd7NvC4n/books';

export const getBooksData = createAsyncThunk(
  GET_BOOK,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const bookData = await response.json();
    const books = Object.keys(bookData).map((key) => ({
      keyValue: key,
      ...data[keyValue][0],
    }));
    dispatch({ type: GET_BOOK, books });
    return books;
  },
);


export const addNewBook = (addNewValue) => (
  { type: ADD_BOOK, addNewValue }
);

export const removeBook = (keyValue) => (
  { type: REMOVE_BOOK, keyValue }
);

const reducerForBooks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookCounts: state.bookCounts + 1,
        books: [...state.books, action.addNewValue],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [...state.books.filter((book) => book.keyValue !== action.keyValue)],
      };
    default:
      return state;
  }
};

export default reducerForBooks;
