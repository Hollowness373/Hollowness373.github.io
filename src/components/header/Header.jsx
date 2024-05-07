import React from 'react';
import { slideInFromLeft, slideInFromTop, slideInFromBottom } from "../../utils/motion.ts"
import { motion } from "framer-motion";
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/me-formal.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <motion.div initial="hidden" animate="visible" className="container header__container">
        <motion.div variants={slideInFromTop}>
          <h5>Hello I'm</h5>
          <h1>Bryan Yj Actub</h1>
          <h5 className="text-light">AND THIS IS MY PORTFOLIO</h5>
          <CTA />
        </motion.div>

        <HeaderSocials />
        
        <motion.div variants={slideInFromBottom}>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible"  className='scroll__down-container'>
          <motion.div variants={slideInFromLeft(0.5)} >
            <a href='#contacts' className='scroll__down'>Contact Me</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header