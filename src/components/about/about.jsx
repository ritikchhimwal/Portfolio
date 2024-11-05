import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpeg";
import { BsAward } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            Passionate Frontend Developer | Backend Enthusiast | Curious Tech
            Explorer.....<br/>
            As a dedicated frontend developer with a keen interest in
            backend technologies, I thrive at the intersection of creativity and
            functionality. With a heart for crafting intuitive, visually
            stunning user experiences, I've made it my mission to bring the
            digital world to life, one line of code at a time.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
