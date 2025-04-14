import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import { EcommerceContext } from '../context/EcommerceContext';

const Home = () => {
  const { products, addToCart } = useContext(EcommerceContext);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
};

export default Home;