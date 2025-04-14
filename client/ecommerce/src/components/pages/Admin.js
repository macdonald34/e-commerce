import React from "react";
import { useContext } from "react";


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