import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jPx8Mihfhi8LHd7NvC4n/books';
const initialState = {
  books: [],
  fetchStatus: true,
};

export const FetchBooksApi = createAsyncThunk(
  'books/FetchBooksApi',
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      const books = Object.entries(data).map(([key, value]) => {
        const { title, category, author } = value[0];
        return {
          keyValue: key,
          title,
          category,
          author,
        };
      });
      return books;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addNewBook = createAsyncThunk(
  'book/addNewBook',
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(FetchBooksApi());
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (payload, thunkAPI) => {
    await axios.delete(`${url}/${payload}`);
    return thunkAPI.dispatch(FetchBooksApi());
  },
);

const FetchBooks = createSlice({
  name: 'reducerForBooks',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchBooksApi.pending]: (state) => {
      state.fetchStatus = true;
    },
    [FetchBooksApi.fulfilled]: (state, action) => {
      state.fetchStatus = false;
      state.books = action.payload;
    },
    [FetchBooksApi.rejected]: (state) => {
      state.fetchStatus = false;
    },
  },
});

export default FetchBooks.reducer;
