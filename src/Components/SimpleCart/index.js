import React from 'react';

const SimpleCart = ({ cartItems, onRemoveItem }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title}
              <button onClick={() => onRemoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleCart;