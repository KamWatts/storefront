import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
