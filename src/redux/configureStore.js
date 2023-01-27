import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerForCategories from './categories/categories';
import FetchBooks from './books/booksApi';
// import reducerForBooks from './books/books';

const reducer = combineReducers({
  books: FetchBooks,
  categories: reducerForCategories,
});

const configStore = configureStore({
  reducer,
});
export default configStore;
