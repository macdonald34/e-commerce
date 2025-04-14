import react from 'react';
import '/components/Cart.css';

const Cart = () => {   
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;