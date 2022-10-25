import React from 'react';
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>TS</a>

      <ul className='permalinks'>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/tetianasymchenko" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/tatyana-simchenko/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TS All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
