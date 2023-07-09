import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e806qol",
        "template_1b2m91l",
        form.current,
        "s8ZHDiYWRqKDLMclE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummygene@gmail.com</h5>
            <a href="mailto:sachinmondal720@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messagenger</h4>
            <h5>dummygene@gmail.com</h5>
            <a href="" target="_blank">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>dummygene@gmail.com</h5>
            <a href="" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
