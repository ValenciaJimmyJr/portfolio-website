import React from 'react';
import { BiBriefcaseAlt2, BiAward, BiDownload } from 'react-icons/bi';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal active">
          <h2 className="section-title">About Me</h2>
          <span className="section-subtitle">My Background</span>
        </div>
        <div className="about-container reveal active delay-1">
          <div className="about-text">
            <p>
              I am a dedicated IT Student aiming to leverage my strong analytical and programming skills into a successful Full-Stack Developer role. With a passion for continuous learning and technology, I enjoy turning complex problems into elegant, intuitive designs.
            </p>
            <p>
              My journey in software development has equipped me with a robust understanding of both front-end aesthetics and back-end logic. I thrive in collaborative environments and am highly motivated to contribute to impactful projects while growing my expertise.
            </p>
            
            <div className="about-info">
              <div className="info-box">
                <span className="icon"><BiBriefcaseAlt2 /></span>
                <div>
                  <span className="info-title">Experience</span>
                  <span className="info-desc">1+ Years Coding</span>
                </div>
              </div>
              <div className="info-box">
                <span className="icon"><BiAward /></span>
                <div>
                  <span className="info-title">Completed</span>
                  <span className="info-desc">10+ Projects</span>
                </div>
              </div>
            </div>
            
            <a href="#" className="btn btn-outline" download>
              Download Resume <BiDownload style={{marginLeft: '0.5rem'}}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
