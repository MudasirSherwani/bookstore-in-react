import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const ADD_BOOK = 'redux/books/BOOK_ADDED';
const REMOVE_BOOK = 'redux/books/BOOK_REMOVED';
const GET_BOOK = 'redux/books/GET_BOOKS';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jPx8Mihfhi8LHd7NvC4n/books';
const initialState = {
  books: {},
  fetchStatus: true,
};

export const FetchBooksApi = createAsyncThunk(
  GET_BOOK,
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addNewBook = createAsyncThunk(
  ADD_BOOK,
  async (bookValues, thunkAPI) => {
    await axios.post(url, bookValues);
    return thunkAPI.dispatch(FetchBooksApi());
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (bookValues, thunkAPI) => {
    await axios.delete(`${url}/${bookValues}`);
    return thunkAPI.dispatch(FetchBooksApi());
  },
);

const FetchBooks = createSlice({
  name: 'getBooks',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchBooksApi.pending]: (state) => {
      state.fetchStatus = true;
    },
    [FetchBooksApi.fulfilled]: (state, action) => {
      state.fetchStatus = false;
      state.books = action.bookValues;
    },
    [FetchBooksApi.rejected]: (state) => {
      state.fetchStatus = false;
    },
  },
});

export default FetchBooks.reducer;
