import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/me-formal.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bryan Yj Actub</h1>
        <h5 className="text-light">AND THIS IS MY PORTFOLIO</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contacts' className='scroll__down'>Contact Me</a>
      </div>
    </header>
  )
}

export default Header