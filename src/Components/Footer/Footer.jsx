import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                    <p>Based in the USA · Available for onsite/remote · React, Microservices, REST APIs, CI/CD, AWS</p> 
            </div>
         <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type='email' placeholder='Your email address' />
            </div>
            <div className="footer-subscribe"> Subscribe</div>
         </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p>© 2025 Aishwarya Aitagani. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
        </div>
    </div>
    </div>
  )
}

export default Footer