import React from 'react';
import { BiMap, BiEnvelope, BiSend } from 'react-icons/bi';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header reveal active">
          <h2 className="section-title">Get In Touch</h2>
          <span className="section-subtitle">Let's Work Together</span>
        </div>
        
        <div className="contact-container reveal active delay-1">
          <div className="contact-info">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-text">Feel free to reach out. I'm currently open to new opportunities, freelance work, and internships.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon"><BiMap /></span>
                <div>
                  <span className="contact-item-title">Location</span>
                  <span className="contact-item-desc">City, Country</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><BiEnvelope /></span>
                <div>
                  <span className="contact-item-title">Email</span>
                  <a href="mailto:hello@example.com" className="contact-item-desc">hello@example.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea cols="30" rows="5" className="form-control" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <BiSend style={{marginLeft: '0.5rem'}}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
