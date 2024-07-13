import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img id="logo-icon" src="/assets/soccer-cream.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" style={{ textDecoration: 'none',color: '#ECE3CE' }}>Home</Link></li>
        <li><Link to="/shop" style={{ textDecoration: 'none' ,color: '#ECE3CE'}}>Products</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none',color: '#ECE3CE' }}>About</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none' ,color: '#ECE3CE'}}>Contacts</Link></li>
      </ul>
      <div className='icons-nav'>
        <Link to="/favorites" className='logo'>
          <img id="logo-icon-right" src="/assets/heart.png" alt="Favorites" />
        </Link>
        <Link to="/cart" className='logo'>
          <img id="logo-icon-right" src="/assets/shopping-cart_cream.png" alt="Cart" />
        </Link>
        <Link to="/profile" className='logo'>
          <img id="logo-icon-right" src="/assets/profile.png" alt="Profile" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;