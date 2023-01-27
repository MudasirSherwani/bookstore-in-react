import './AddBookForm.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const [initialState, setState] = useState({ key: '', title: '', author: '' });

  const arrBook = useSelector((state) => state.books.books);
  const key = arrBook.length;
  const dataEntered = (event) => {
    setState({
      ...initialState,
      key: (key + 1).toString(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatchBooks = useDispatch();
  const submitBookData = (e) => {
    e.preventDefault();
    dispatchBooks(addNewBook(initialState));
    setState({ key: '', title: '', author: '' });
  };

  return (
  <div className="add-book">
    <h2>ADD NEW BOOK</h2>
    <div>
      <form onSubmit={submitBookData}>
        <input type="text" name="title" placeholder="Add Book Title" value={initialState.title} onChange={dataEntered}/>
        <input type="text" name="author" placeholder="Add Book Author" value={initialState.author} onChange={dataEntered}/>
        <button type="submit">ADD BOOK </button>
      </form>
    </div>
  </div>
);
  };

export default AddBook;
