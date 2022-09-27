import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__design">
          <h3>Design Experiense</h3>
          <div className="experience__content">
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>Photoshop</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>Illustrator</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>Prototyping</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>Git</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
            <article className="experience__ditails">
              <BsPatchCheckFill className="experience__ditails-icon"/>
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experiesed</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
