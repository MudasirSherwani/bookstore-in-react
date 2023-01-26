const BOOK_STATUS = 'redux/categories/CHECKED_STATUS';

const emptyState = {
  categories: [],
};

export const bookStatus = () => ({
  type: BOOK_STATUS,
});

const reducerForCategories = (state = emptyState, action) => {
  switch (action.type) {
    case BOOK_STATUS:
      return {
        ...state,
        categories: [...state.categories, 'Under construction'],
      };
    default:
      return state;
  }
};

export default reducerForCategories;
