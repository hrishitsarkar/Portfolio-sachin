import React from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";
function Experience() {
  return (
    <section id="experience">
      <h5>What I had done</h5>
      <h2>My Experience</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <img
              src="https://play-lh.googleusercontent.com/3bqfon59hQmaZjUFSXc-yK7MaIPzSNQAM2v8MQLKpIu9scf58pOpGSHWXUZRhJI_5jQ=s180"
              alt=""
              style={{ width: "3rem" }}
            />
            <h3>Teaching Assistant</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Worked as a Teaching Assistant at Coding Ninjas , for Web
                Development(Mern Stack)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Have resolved over 500+ doubts of students in achieveing an
                overall rating of 4.77 out of 5.0 for my asssitance and
                expertise.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Provided Educational support to 300+ students in learning key
                concepts of Web Development.
              </p>
            </li>
            <h3>Experience Certificates</h3>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <a href="https://ninjasfiles.s3.amazonaws.com/certificate71157b9f21685145f898b923bdafb7ab0dcb.pdf">
                  Link to the Experience Certificate
                </a>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <a href="https://students.codingninjas.com/li-share/taship-journey-2072728-1688920280-e0de4cf78a354396bc57a9a1a7b06fa5">
                  Link to the Performance chart
                </a>
              </li>
            </ul>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
