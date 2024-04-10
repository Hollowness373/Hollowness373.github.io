import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import "./contacts.css";
import {MdOutlineMail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {FiInstagram} from "react-icons/fi"


const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID);

    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>actub.bryanyj@gmail.com</h5>
            <a href='mailto:actub.bryanyj@gmail.com'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bryan Yj Actub</h5>
            <a href='https://m.me/NayrbJY' target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>hollowness_yj</h5>
            <a href='https://www.instagram.com/hollowness_yj/' target="_blank">Send a message</a>
          </article>
        </div>
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