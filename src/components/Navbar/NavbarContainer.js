import React from 'react';
import './Navbar.css';
import Logo from '../../Images/BlossomSpas.png';
import { BiSpa } from 'react-icons/bi';

const NavbarContainer = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          {/* <img src={Logo} className="logo-img" alt="logo" /> */}
          <BiSpa />
        </div>
        <div className="navbar-links">
          <a href="www.google.com">HOME</a>
          <a href="www.google.com">SERVICES</a>
          <a href="www.google.com">SPECIALS</a>
          <a href="www.google.com">BOOK</a>
          <a href="www.google.com">CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default NavbarContainer; 
