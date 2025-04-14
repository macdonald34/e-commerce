import React from 'react';
import ProductItem from './ProductItem';
import { Grid } from '@material-ui/core';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductItem product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;