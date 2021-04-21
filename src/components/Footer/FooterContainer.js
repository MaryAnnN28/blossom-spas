import React from 'react'
import './Footer.css'

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p className="footer-hours">
          Hours of Operation<br />
          M-F 10am - 8pm
          </p>
      </div>
      <div className="footer-center">

      </div>
      <div className="footer-right">
        <p className="footer-address">
          Street address<br />
          State, City Zip<br />
          Phone
          Email

        </p>
      </div>
    </div>
  )
}

export default FooterContainer
