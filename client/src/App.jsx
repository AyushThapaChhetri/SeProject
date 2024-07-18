import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Desc from './components/Desc';
import Footer from './components/Footer';
import NotFound from './components/NotFoundPage';
// import About from './components/About';
// import Contact from './components/Contact';
// import Favorites from './components/Favorites';
// import Profile from './components/Profile';

import { ShopContextProvider } from './context/shopContext';
import Signup from './Signup'
import Login from './Login'

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/desc" element={<Desc />} />
            <Route path="/about" element={<About />} />
            <Route path="/footer" element={<NotFound />} />
            <Route path="/favorites" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;