import react from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;