import React, { useRef } from "react";
import "./contact.css";
import wordpress from "../../assets/wordpress.webp";
import shopify from "../../assets/shopify.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/Bootstrap.webp";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w7bjvnv", "template_8ugc6ws", form.current, {
        publicKey: "yTkQ5nrDNvPNAr84e",
      })
      .then(
        () => {
          console.log("Email Sent Successfully!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div id="my-skills">
        <h1 className="myskill-title">
          Explore My <strong>Skills</strong>
        </h1>
        <div className="myskills-images">
          <span className="myskills-card">
            <img src={wordpress} alt="Wordpress" className="skills-img"></img>
            <label>Wordpress</label>
          </span>
          <span className="myskills-card">
            <img src={shopify} alt="Shopify" className="skills-img"></img>
            <label>Shopify</label>
          </span>
          <span className="myskills-card">
            <img src={react} alt="React" className="skills-img"></img>
            <label>React</label>
          </span>
          <span className="myskills-card">
            <img src={html} alt="HTML" className="skills-img"></img>
            <label>HTML</label>
          </span>
          <span className="myskills-card">
            <img src={css} alt="CSS" className="skills-img"></img>
            <label>CSS</label>
          </span>
          <span className="myskills-card">
            <img src={bootstrap} alt="CSS" className="skills-img"></img>
            <label>Bootstrap</label>
          </span>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpage-title">Contact Me</h1>
        <p className="contactpage-description">
          Feel free to reach out if you're looking to hire a developer
        </p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          ></input>
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          ></input>
          <input
            type="Subject"
            className="subject"
            placeholder="I would like to discuss"
            name="your_subject"
          ></input>
          <textarea
            className="message"
            name="message"
            rows={5}
            placeholder="Write Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submit-btn">
            Submit
          </button>
          <div className="social-links">
            <a href="mailto: mh575390@gmail.com">
              {" "}
              <FaEnvelope className="social-icon">Email</FaEnvelope>
            </a>
            <a href="https://wa.me/923322467774">
              <FaWhatsapp className="social-icon">Whatsapp</FaWhatsapp>
            </a>
            <a href="https://github.com/mohammadhussain52">
              <FaGithub className="social-icon">Github</FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-hussain-769610281/">
              <FaLinkedin className="social-icon">Linkedin</FaLinkedin>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
