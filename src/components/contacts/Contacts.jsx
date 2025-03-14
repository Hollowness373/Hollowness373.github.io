import React, { useRef } from 'react';
//import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser"
import "./contacts.css";
import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {FiInstagram} from "react-icons/fi";
import { motion } from "framer-motion";
import { slideInFromLeft } from '../../utils/motion.ts';
import { useInView } from "react-intersection-observer";


const Contacts = () => {

  const form = useRef();
  const { ref, inView } = useInView({triggerOnce: true})
  
  emailjs.init({
    publicKey: process.env.REACT_APP_USER_ID,
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
    try {
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID).then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Email sending error:', error.text);
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <motion.div ref={ref} initial="hidden" animate={inView? "visible" : "hidden"} className="contact__options">
          <motion.article variants={slideInFromLeft(0.6)} className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>actub.bryanyj@gmail.com</h5>
            <a href='mailto:actub.bryanyj@gmail.com'>Send a message</a>
          </motion.article>
          <motion.article variants={slideInFromLeft(0.8)} className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bryan Yj Actub</h5>
            <a href='https://m.me/NayrbJY' target="_blank" rel="noreferrer">Send a message</a>
          </motion.article>
          <motion.article variants={slideInFromLeft(1)} className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>hollowness_yj</h5>
            <a href='https://www.instagram.com/hollowness_yj/' target="_blank" rel="noreferrer">Send a message</a>
          </motion.article>
        </motion.div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts;