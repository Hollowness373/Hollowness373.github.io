import React from 'react';
import { useInView } from "react-intersection-observer";
import { slideInFromRight } from "../../utils/motion.ts";
import { motion } from "framer-motion";
import "./about.css";
import ME from "../../assets/me-toga.jpg";
import {GiGraduateCap} from "react-icons/gi";

const About = () => {

  const { ref, inView } = useInView({triggerOnce: true})

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='My Toga Picture' />
          </div>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView? "visible" : "hidden"} className="about__content">
          <motion.div variants={slideInFromRight(0.5)} className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Computer Engineering</small>
            </article>
          </motion.div>

          <motion.p variants={slideInFromRight(0.8)}>Hi there! I am Bryan Yj Actub, a skilled software developer with a passion for creating mobile applications. During my internship, I gained hands-on experience in developing mobile apps and went on to create several projects on my own. </motion.p>
          <motion.p variants={slideInFromRight(1)}>In addition to coding, I also have a creative side that I enjoy exploring through my passion for drawing anime characters. I also love to challenge myself and stay sharp by playing chess.</motion.p>
          <motion.p variants={slideInFromRight(1.3)}>My goal is to continue growing as a developer and work on impactful projects that make a difference in people's lives. I am eager to bring my skills and passion to a dynamic and collaborative team, where I can continue to learn and contribute to the success of the organization</motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About;