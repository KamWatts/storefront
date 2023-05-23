const initialState = [
  { id: 1, name: 'Product 1', category: 1 },
  { id: 2, name: 'Product 2', category: 1 },
  { id: 3, name: 'Product 3', category: 2 },
  { id: 4, name: 'Product 4', category: 3 },
];

const productsReducer = (state = initialState, action) => {
  // Handle actions related to products (if any)
  return state;
};

export default productsReducer;
