import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/actub-bryanyj/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Hollowness373' target="_blank"><FaGithub/></a>
        <a href='https://facebook.com/NayrbJY' target="_blank"><FaFacebook/></a>

    </div>
  )
}

export default HeaderSocials