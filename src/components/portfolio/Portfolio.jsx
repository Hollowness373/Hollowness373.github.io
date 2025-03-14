import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/GuildManagementSystem.png"
import IMG2 from "../../assets/CoffeeAppDark.png"
import IMG3 from "../../assets/socialease.png";
import IMG4 from "../../assets/wastesegregation.png";
import IMG5 from "../../assets/qrlibrary.png";
import IMG6 from "../../assets/databois.png";
//import IMG7 from "../../assets/primaryhealthcare.png";


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projects.map(({id, image, title, github, description, stack}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn-item' target="_blank" rel='noreferrer'>Github</a>
                  <div className='portfolio__item-stack'>
                      <p>Stack:{stack}</p>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;


const projects = [
  {
    id : 1,
    image : IMG1,
    title : "Guild Management System",
    github : "https://github.com/Hollowness373/roo-gms",
    description : "A guild management system for Ragnarok Online Origin, with guides, game mechanics simulations, an admin panel, and updates on guild events.",
    stack : " NextJS, Auth.js, Neon PostgreSQL, drizzle, TypeScript, TailwindCSS, Imagekit.io"
  },
  {
    id : 2,
    image : IMG2,
    title : "Coffee App",
    github : "https://github.com/Hollowness373/CoffeeApp",
    description : "A mobile application designed to replicate Coffee App v2 UI by Dennis Nzioki. Allows you to easily order coffee and enjoy it at your favorite cafes nearby.",
    stack : " React Native, Node, Express.js, MySQL, JavaScript"
  },
  {
    id : 3,
    image : IMG3,
    title : "SocialEase",
    github : "https://github.com/Hollowness373/SocialEase",
    description : "Social media app that allows to connect and share with friends and followers. Create posts, share stories, and explore the profiles of others to stay updated on their lives and experiences.",
    stack : " React Native, AWS Amplify, JavaScript"
  },
  {
    id : 4,
    image : IMG4,
    title : "Waste Segregation App",
    github : "https://github.com/Lico0122/Thesis-Arduino",
    description : "Waste segregation design automatically sorts household waste into separate bins, with real-time monitoring, users receive notifications when a bin is nearing capacity.",
    stack : " React Native, PHP, MySQL, XAMPP, JavaScript"
  },
  {
    id : 5,
    image : IMG5,
    title : "QrLibrary App",
    github : "https://github.com/Hollowness373/Qr-Library-App",
    description : "Automate the time-in and time-out system in school libraries by scanning the students QR codes. Remove the hassle of writing down information and looking out for a pen!",
    stack : " React Native, PHP, MySQL, XAMPP, JavaScript"
  },
  {
    id : 6,
    image : IMG6,
    title : "DataBois",
    github : "https://github.com/Hollowness373/DataBoisApplication",
    description : "Experience seamless online shopping with our e-commerce app. Browse a wide range of products across multiple categories, compare prices, and add items to your cart with ease",
    stack : " React Native, PHP, MySQL, XAMPP, JavaScript"
  },
]
/*
{
    id : 7,
    image : IMG5,
    title : "Primary Health Care",
    github : "https://github.com/Hollowness373/PrimaryHealthCare-App",
    description : "Primary Health Care is an application that lets you view the remedies or treatment for common sickness, allergies, and injury, browse for primary treatment offline!",
    stack : " Android Studio, Java, SQLite"
  }
*/