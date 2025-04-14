import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/product');
    setProducts(response.data);
  };

  const addProduct = async (product) => {
    await axios.post('http://localhost:5000/product', product);
    fetchProducts();
  };

  const updateProduct = async (id, updatedProduct) => {
    await axios.put(`http://localhost:5000/product/${id}`, updatedProduct);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`);
    fetchProducts();
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <EcommerceContext.Provider
      value={{
        products,
        cart,
        addProduct,
        updateProduct,
        deleteProduct,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};