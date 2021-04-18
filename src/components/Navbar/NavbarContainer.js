import React from 'react'
import './Navbar.css'
import Logo from '../../Images/BlossomSpas.png'

const NavbarContainer = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} className="logo-img" alt="logo" />
        </div>
        <div className="navbar-links">
          <a href="www.google.com">HOME</a>
          <a href="www.google.com">SERVICES</a>
          <a href="www.google.com">SPECIALS</a>
          <a href="www.google.com">BOOK APPOINTMENT</a>
          <a href="www.google.com">ABOUT</a>
          <a href="www.google.com">CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default NavbarContainer
