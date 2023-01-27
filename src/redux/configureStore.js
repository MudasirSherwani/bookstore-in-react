import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerForCategories from './categories/categories';
import reducerForBooks from './books/books';

const reducer = combineReducers({
  books: reducerForBooks,
  categories: reducerForCategories,
});

const configStore = configureStore({
  reducer,
});
export default configStore;
