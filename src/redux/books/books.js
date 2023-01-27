const ADD_BOOK = 'redux/books/BOOK_ADDED';
const REMOVE_BOOK = 'redux/books/BOOK_REMOVED';

const initialState = {
  bookCounts: '3',
  books: [
    { keyValue: '1', title: 'The Innovator’s Dilemma', author: 'Clayton Christens' },
    { keyValue: '2', title: 'Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
    { keyValue: '3', title: 'The Soul of a New Machine', author: 'racy Kidder' },
  ],
};
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
