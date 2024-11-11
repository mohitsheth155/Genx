// Form.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    userName: '',
    productName: '',
    buyingDate: '',
    mfgDate: '',
    expDate: '',
    quantity: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/display');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="userName"
        placeholder="User Name"
        value={formData.userName}
        onChange={handleChange}
        required
      />
      <input
        name="productName"
        placeholder="Product Name"
        value={formData.productName}
        onChange={handleChange}
        required
      />
      <label >buyingDate</label>
      <input
        type="date"
        name="buyingDate"
        value={formData.buyingDate}
        onChange={handleChange}
        required
      />
      <label >mfgDate</label>
      <input
        type="date"
        name="mfgDate"
        value={formData.mfgDate}
        onChange={handleChange}
        required
      />
      <label >expDate</label>
      <input
        type="date"
        name="expDate"
        value={formData.expDate}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">{initialData ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default Form;
