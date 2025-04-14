import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;