import React from 'react'
import './Footer.css'

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p className="footer-hours">
          <b>Business Hours</b>
          <br />
          M-Sa 9:00am - 8:00pm <br />
          Sun 11:00am - 6:00pm
          </p>
      </div>
      <div className="footer-center">

      </div>
      <div className="footer-right">
        <p className="footer-address">
          600 University Blvd.<br />
          Harrisonburg, VA 22801<br />
          
          <b>Phone</b>
          (540) 217-2194
      

        </p>
      </div>
    </div>
  )
}

export default FooterContainer
