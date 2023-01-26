import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerForCategories from './categories/categories';
import reducerForBooks from './books/books';

const reducerCombined = combineReducers({
  books: reducerForBooks,
  categories: reducerForCategories,
});

const configStore = configureStore({
  reducerCombined,
});
export default configStore;
