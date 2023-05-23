import React from 'react';
import { useSelector } from 'react-redux';

function Products() {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const products = useSelector((state) =>
    state.products.filter((product) => product.category === selectedCategory)
  );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
