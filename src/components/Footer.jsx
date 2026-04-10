import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#" className="logo footer-logo">Dev<span>Portfolio</span></a>
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><BiEnvelope /></a>
          </div>
        </div>
        <p className="footer-copy">&#169; 2026 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
