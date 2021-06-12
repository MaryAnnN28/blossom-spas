import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiSpa } from 'react-icons/bi';

const NavbarContainer = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='navbar-logo'>
					<BiSpa size='50px' style={{ color: '#dfdfdf' }} />
				</div>
        <div className='navbar-links'>
          <Link to="/" className="item">HOME</Link>
          <Link to="/about" className="item">ABOUT</Link>
          <Link to="/services" className="item">SERVICES</Link>
          <Link to="/appointment" className="item">APPOINTMENT</Link>
          <Link to="/contact" className="item">CONTACT</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarContainer;
