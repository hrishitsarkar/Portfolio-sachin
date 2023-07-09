import React from "react";
import "./about.css";
import ME from "../../assets/self-pictures/2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fresher</h5>
              <small>currently in 3rd year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            I'm Sachin Mondal, a 3rd-year B.Tech CSE student at Netaji Subhash
            Engineering College. Web development has become my passion.
            Proficient in HTML, CSS, JavaScript and React, I enjoy creating
            visually appealing websites and applications. Solving complex
            problems and paying attention to detail are my strengths. Outside of
            technology, I enjoy reading and staying active through outdoor
            activities. With dedication and passion, I aim to make a significant
            impact in web development. impact in the world of web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
