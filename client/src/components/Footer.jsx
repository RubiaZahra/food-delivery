import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


     
const Footer = () => {
  return (
    <>
    <div className="footer" id='footer'>
    <div className="footer-content ">
    <div className="footer-left">
        <img width={80}  src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-food-logo-png-image_5762315.png" className='logo' alt="" />
        <p >Craving your favorite meals? We've got you covered! Enjoy fast, fresh, and delicious food delivered straight to your door. Order now and satisfy your hunger in just a few clicks!</p>
        <div className="social-icons">
        <FaFacebook className='mx-2' />
        <FaTwitter className='mx-2' />
        <FaLinkedin className='mx-2' />
        </div>
    </div>
    <div className="footer-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-right">
       <h2>Get In Touch</h2>
        <ul>
            <li>+9234847749</li>
            <li>Food@gmail.com</li>
        </ul> 
        
    </div>
    <div className="copy-right">
    <hr/>
   <p>Copyright 2024 © Food.com - All Rights are Reserved</p> 
   </div>
     </div>
    </div>
    
    </>
  )
}

export default Footer