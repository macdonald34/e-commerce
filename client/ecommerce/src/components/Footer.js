import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <p>&copy; 2023 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;