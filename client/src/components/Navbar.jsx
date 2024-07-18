import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img id="logo-icon" src="/assets/soccer-cream.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" style={{ textDecoration: 'none', color: '#ECE3CE' }}>Home</Link></li>
        <li><Link to="/shop" style={{ textDecoration: 'none', color: '#ECE3CE' }}>Products</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#ECE3CE' }}>About</Link></li>
        <li><Link to="/footer" style={{ textDecoration: 'none', color: '#ECE3CE' }}>Contacts</Link></li>
      </ul>
      <div className='icons-nav'>
        {/* <Link to="/favorites" className='logo'>
          <img id="logo-icon-right" src="/assets/heart.png" alt="Favorites" />
        </Link> */}
        <Link to="/cart" className='logo'>
          <img id="logo-icon-right" src="/assets/shopping-cart_cream.png" alt="Cart" />
        </Link>
        {!isLoggedIn ? (
          <>
            {/* <Link to="/login" className='logo'>
              <img id="logo-icon-right" src="/assets/profile.png" alt="login" />
            </Link> */}
            {/* <div >
            </div> */}
            <Link to="/Login" style={{ textDecoration: 'none', listStyleType: 'none', color: '#ECE3CE' }}><button className='shop-btn-e'>Login</button></Link>
            <Link to="/Signup" style={{ textDecoration: 'none', listStyleType: 'none', color: '#ECE3CE' }}><button className='shop-btn-e'>Signup</button></Link>
            {/* <div style={{ padding: '0.5rem' }}>
            </div> */}
          </>
        ) : (
          <div ><button onClick={handleLogout} className='shop-btn-e'>Logout</button></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;