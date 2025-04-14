import React from "react";
import React, { useContext } from 'react';
import { EcommerceContext } from '../../context/EcommerceContext'; // adjust if needed
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';
import ProductEdit from '../../components/ProductEdit';
import ProductDelete from '../../components/ProductDelete';



const Admin = () => {
  const { products, addProduct, editProduct, deleteProduct } = useContext(EcommerceContext);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <ProductList products={products} onAddToCart={addProduct} />
      <ProductForm onSubmit={addProduct} />
      <ProductEdit onSubmit={editProduct} />
      <ProductDelete onSubmit={deleteProduct} />
    </div>
  );
}

export default Admin;