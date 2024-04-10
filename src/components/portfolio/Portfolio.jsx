import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/CoffeeAppDark.png"
import IMG2 from "../../assets/socialease.png";
import IMG3 from "../../assets/wastesegregation.png";
import IMG4 from "../../assets/databois.png";
import IMG5 from "../../assets/primaryhealthcare.png";
import IMG6 from "../../assets/qrlibrary.png";
import IMG7 from "../../assets/biodata.png";


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
                  <a href={github} className='btn' target="_blank">Github</a>
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
    title : "Coffee App",
    github : "https://github.com/Hollowness373/CoffeeApp",
    description : "A mobile application designed to replicate Coffee App v2 UI by Dennis Nzioki. Allows you to easily order coffee and enjoy it at your favorite cafes nearby.",
    stack : " React Native"
  },
  {
    id : 2,
    image : IMG2,
    title : "SocialEase",
    github : "https://github.com/Hollowness373/SocialEase",
    description : "Social media app that allows to connect and share with friends and followers. Create posts, share stories, and explore the profiles of others to stay updated on their lives and experiences.",
    stack : " React Native, AWS Amplify"
  },
  {
    id : 3,
    image : IMG3,
    title : "Waste Segregation App",
    github : "https://github.com/Lico0122/Thesis-Arduino",
    description : "Waste segregation design automatically sorts household waste into separate bins, with real-time monitoring, users receive notifications when a bin is nearing capacity.",
    stack : " React Native, PHP, MySQL, XAMPP"
  },
  {
    id : 4,
    image : IMG4,
    title : "DataBois",
    github : "https://github.com/Hollowness373/DataBoisApplication",
    description : "Experience seamless online shopping with our e-commerce app. Browse a wide range of products across multiple categories, compare prices, and add items to your cart with ease",
    stack : " React Native, PHP, MySQL, XAMPP"
  },
  {
    id : 5,
    image : IMG5,
    title : "Primary Health Care",
    github : "https://github.com/Hollowness373/PrimaryHealthCare-App",
    description : "Primary Health Care is an application that lets you view the remedies or treatment for common sickness, allergies, and injury, browse for primary treatment offline!",
    stack : " Android Studio, Java, SQLite"
  },
  {
    id : 6,
    image : IMG6,
    title : "QrLibrary App",
    github : "https://github.com/Hollowness373/Qr-Library-App",
    description : "Automate the time-in and time-out system in school libraries by scanning the students QR codes. Remove the hassle of writing down information and looking out for a pen!",
    stack : " React Native, PHP, MySQL, XAMPP"
  },
  {
    id : 7,
    image : IMG7,
    title : "Biodata App",
    github : "https://github.com/Hollowness373/Biodata-App",
    description : "Allows user to create digital Bio data",
    stack : " Android Studio, Java, SQLite"
  },
]