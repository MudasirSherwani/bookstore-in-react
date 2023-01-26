const ADD_BOOK = 'redux/books/BOOK_ADDED';
const REMOVE_BOOK = 'redux/books/BOOK_REMOVED';
const initialState = {
  books: [],
};
export const addNewBook = (addNewValue) => (
    { type: types.ADD_BOOK, addNewValue }
    );

export const removeBook = (id) => (
    { type: types.REMOVE_BOOK, id }
    );

const reducerForBooks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return {
        ...state,
        books: [...state, action.payload],
      };
    case types.REMOVE_BOOK:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default reducerForBooks;
