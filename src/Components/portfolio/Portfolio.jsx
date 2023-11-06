import React from "react";
import "./portfolio.css";
import Blomber from "../../assets/portfolio-images/blomber.png";
const data = [
  {
    id: 1,
    image: Blomber,
    title: "Blomber",
    description: "This is a RealTime chat application based on chat-engine.",
    github: "https://github.com/Sachin03072002/Blomber",
    demo: "https://react-chat-app-29f57.web.app/",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, description, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
