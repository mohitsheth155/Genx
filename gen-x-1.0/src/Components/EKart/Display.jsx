// Display.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Display = ({ products, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (product) => {
    onEdit(product);
    navigate('/');
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p><strong>Name:</strong> {product.userName}</p>
              <p><strong>Product:</strong> {product.productName}</p>
              <p><strong>Buying Date:</strong> {product.buyingDate}</p>
              <p><strong>MFG Date:</strong> {product.mfgDate}</p>
              <p><strong>Expiry Date:</strong> {product.expDate}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/')}>Add New Product</button>
    </div>
  );
};

export default Display;
