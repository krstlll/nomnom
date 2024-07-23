import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo_white} alt="" />
            <p>&copy; 2024 NomNom. Born from a passion for great food, 
                NomNom delivers your favorite meals with a touch of love 
                and care, right to your doorstep.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.x_icon} alt="" />
                    <img src={assets.ig_icon} alt="" />

                </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+63 934 786 2341</li>
                <li>contact.nomnom.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; NomNom.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
