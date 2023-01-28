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
      category: 'Tech',
    });
  };

  const dispatchBooks = useDispatch();
  const submitBookData = (e) => {
    e.preventDefault();
    dispatchBooks(addNewBook(initialState));
    setState({
      item_id: '', title: '', author: '', category: 'Tech',
    });
  };

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={submitBookData}>
          <input type="text" name="title" placeholder="Add Book Title" value={initialState.title} onChange={dataEntered} />
          <input type="text" name="author" placeholder="Add Book Author" value={initialState.author} onChange={dataEntered} />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
