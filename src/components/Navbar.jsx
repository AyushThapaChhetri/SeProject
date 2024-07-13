import React from 'react'
import '../Css/Navbar.css'
// import logo_light from '../../assets/logo-black.png'
// import logo_dark from '../../assets/logo-white.png'
// import search_icon_light from '/assets/search-w.png'
// import soccer from '/assets/soccer.png'
// import search_icon_dark from '/assets/search-b.png'
// import toogle_light from '/assets/night.png'
// import toogle_dark from '/assets/day.png'
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { IoPerson } from "react-icons/io5";


const Navbar = ({theme, setTheme}) => {
  // const toggle_mode=()=>{
  //   theme=='light'?setTheme('dark'):setTheme('light');
  // }
  return (
    <div className='navbar'>
        {/* <img src={theme=="light"?logo_light:logo_dark} alt="" className='logo' /> */}
        <div className='logo'><a><img id="logo-icon"src="/assets/soccer-cream.png"/></a></div>
        <div >
            <ul className="nav-links">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        
        <div className='icons-nav'>
          {/* <div className='search-box'>
              <input type="text" placeholder='Search' />
              <img src={theme=="light"?search_icon_light:search_icon_dark} alt="" />
          </div> */}
          <div className='logo'><a><img id="logo-icon-right"src="/assets/heart.png"/></a></div>
          <div className='logo'><a><img id="logo-icon-right"src="/assets/shopping-cart_cream.png"/></a></div>
          <div className='logo'><a><img id="logo-icon-right"src="/assets/profile.png"/></a></div>

        </div>
        {/* <div className="dark_mode">
            <img onClick={()=>{toggle_mode()}} src={theme=="light"?toogle_light:toogle_dark} alt="" className='toggle-icon' />
        </div> */}
    </div>
  )
}

export default Navbar
