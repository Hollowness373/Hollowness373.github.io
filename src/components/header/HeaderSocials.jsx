import React from 'react'
import { slideInFromTop } from "../../utils/motion.ts"
import { motion } from "framer-motion";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div variants={slideInFromTop} className='header__socials'>
        <a href='https://linkedin.com/in/actub-bryanyj/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Hollowness373' target="_blank"><FaGithub/></a>
        <a href='https://facebook.com/NayrbJY' target="_blank"><FaFacebook/></a>
      </motion.div>
    </motion.div>
  )
}

export default HeaderSocials