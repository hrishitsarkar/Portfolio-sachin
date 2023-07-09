import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>FrontEnd Development</h3>

          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <div>
            <h3>Certificates</h3>
            <div className="certificate__container">
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <div>
                  <h4>FrontEnd</h4>
                  <small>
                    <a
                      href="https://certificate.codingninjas.com/view/2ff891455a6bdf75"
                      className="text-light"
                    >
                      Link...
                    </a>
                  </small>
                </div>
              </article>
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <div>
                  <h4>Advance FrontEnd</h4>
                  <small>
                    <a
                      href="https://certificate.codingninjas.com/view/e8122ba58a85f0f1"
                      className="text-light"
                    >
                      Link...
                    </a>
                  </small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="skill__backend">
          <h3>BackEnd Development</h3>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Express</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="skill__details">
            <BsPatchCheckFill className="skill__details-icon" />
            <div>
              <h4>Passport</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <div>
            <h3>Certificates</h3>
            <div className="certificate__container">
              <article className="skill__details">
                <BsPatchCheckFill className="skill__details-icon" />
                <div>
                  <h4>Backend</h4>
                  <small>
                    <a
                      href="https://certificate.codingninjas.com/view/025398e755a3a7eb"
                      className="text-light"
                    >
                      Link...
                    </a>
                  </small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
