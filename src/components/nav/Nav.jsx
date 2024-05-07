import React, {useState} from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import {MdOutlineDeveloperMode} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";

const Nav = () => {

  const [ activeNav, setActiveNav ] = useState("#");

  return (
    <nav>
      <a href='#' className={activeNav === "#" ? "active" : ""} onClick={() => setActiveNav("#")}>
        <AiOutlineHome/>
      </a>

      <a href='#about' className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}>
        <AiOutlineUser/>
      </a>

      <a href='#experience' className={activeNav === "#experience" ? "active" : ""} onClick={() => setActiveNav("#experience")}>
        <BiBookAlt/>
      </a>

      <a href='#portfolio' className={activeNav === "#portfolio" ? "active" : ""} onClick={() => setActiveNav("#portfolio")}>
        <MdOutlineDeveloperMode/>
      </a>
      
      <a href='#contacts' className={activeNav === "#contacts" ? "active" : ""} onClick={() => setActiveNav("#contacts")}>
        <AiOutlineMail/>
      </a>
    </nav>
  )
}

export default Nav