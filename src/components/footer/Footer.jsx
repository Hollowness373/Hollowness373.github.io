import React from 'react';
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'>Bryan Yj Actub</a>

      <ul className='permalinks'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com/NayrbJY' target="_blank" rel='noreferrer'><FaFacebookF/></a>
        <a href='https://instagram.com/hollowness_yj/' target="_blank" rel='noreferrer'><FiInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer