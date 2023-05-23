const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

const initialState = {
  categories: [
    { id: 1, displayName: 'Category 1' },
    { id: 2, displayName: 'Category 2' },
    { id: 3, displayName: 'Category 3' },
  ],
  selectedCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
