import React from "react";
import ME2 from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiense</h5>
              <small>Just started</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Just started</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Pet projects</small>
            </article>
          </div>
          <p>
          I like the process of website development, in which use acquired skills and find new solutions. I’m able to use best approaches of HTML, CSS and Javascript for responsive, cross-browser websites and SPA creation. 
I love talking to people and know how to listen, also like having conversations with people about different topics. 

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
