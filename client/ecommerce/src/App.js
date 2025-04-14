import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import { EcommerceProvider } from './context/EcommerceContext';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductEdit from './components/ProductEdit';
import ProductDelete from './components/ProductDelete';
import ProductDetail from './components/ProductDetail';
import EcommerceContext from './context/EcommerceContext';



function App() {
  return (
    <EcommerceProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productItem" element={<ProductItem/>} />
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/productForm" element={<ProductForm/>} />
          <Route path="/productEdit" element={<ProductEdit/>} />
          <Route path="/productDelete" element={<ProductDelete/>} />
          <Route path="/productDetail" element={<ProductDetail/>} />
          <Route path="/ecommerceContext" element={<EcommerceContext/>} />
        </Routes>
        <Footer/>
      </Router>
    </EcommerceProvider>
  );
}

export default App;