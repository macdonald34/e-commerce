import react from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">E-Commerce</div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/"></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;