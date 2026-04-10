import React from 'react';
import { BiEnvelope, BiCodeAlt } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">Jimmy Valencia Jr</h1>
          <h2 className="hero-subtitle">IT Student & <span>Full-Stack Developer</span></h2>
          <p className="hero-description">
            I craft responsive, dynamic, and user-centric web applications. Passionate about problem-solving and modern web technologies.
          </p>
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">View Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">Contact Me</Link>
          </div>
          <div className="hero-socials">
            <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon"><BiEnvelope /></a>
          </div>
        </div>
        <div className="hero-image-wrapper reveal active delay-1">
          <div className="hero-image">
            <div className="hero-blob"></div>
            <span className="icon placeholder-icon"><BiCodeAlt /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
