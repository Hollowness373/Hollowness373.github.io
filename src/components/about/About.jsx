import React from 'react';
import "./about.css";
import ME from "../../assets/me-toga.jpg";
import {GiGraduateCap} from "react-icons/gi";
import {FaRegFolderOpen} from "react-icons/fa"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Computer Engineering</small>
            </article>
            <article className='about__card'>
              <a href='#portfolio'>
              <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              </a>
            </article>
          </div>

          <p>Hi there! I am Bryan Yj Actub, a skilled software developer with a passion for creating mobile applications. During my internship, I gained hands-on experience in developing mobile apps and went on to create several projects on my own. </p>
          <p>In addition to coding, I also have a creative side that I enjoy exploring through my passion for drawing anime characters. I also love to challenge myself and stay sharp by playing chess.</p>
          <p>My goal is to continue growing as a developer and work on impactful projects that make a difference in people's lives. I am eager to bring my skills and passion to a dynamic and collaborative team, where I can continue to learn and contribute to the success of the organization</p>


          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;