import './AddBooksForm.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBook } from '../redux/books/booksApi';

const AddBook = () => {
  const [initialState, setState] = useState({
    item_id: '', title: '', author: '', category: '',
  });

  const dataEntered = (event) => {
    setState({
      ...initialState,
      item_id: nanoid(),
      [event.target.name]: event.target.value,
      category: 'Technology',
    });
  };

  const dispatchBooks = useDispatch();
  const submitBookData = (e) => {
    e.preventDefault();
    dispatchBooks(addNewBook(initialState));
    setState({
      item_id: '', title: '', author: '', category: 'Technology',
    });
  };

  return (
    <div className="add-book">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <div>
        <form className="add-book-form" onSubmit={submitBookData}>
          <input className="title input" type="text" name="title" placeholder="Add Book Title" value={initialState.title} onChange={dataEntered} />
          <input className="author input" type="text" name="author" placeholder="Add Book Author" value={initialState.author} onChange={dataEntered} />
          <button className="primary-button-big" type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
