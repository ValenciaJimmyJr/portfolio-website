import React from 'react';
import { BiCodeBlock, BiServer, BiWrench } from 'react-icons/bi';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql, SiFlask } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header reveal active">
          <h2 className="section-title">Technical Skills</h2>
          <span className="section-subtitle">What I Bring to the Table</span>
        </div>
        
        <div className="skills-container reveal active delay-1">
          {/* Frontend Stack */}
          <div className="skills-card">
            <h3 className="skills-title"><span className="icon"><BiCodeBlock /></span> Front-End</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon html"><FaHtml5 /></span>
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon css"><FaCss3Alt /></span>
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon js"><IoLogoJavascript /></span>
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon react"><FaReact /></span>
                <span>React</span>
              </div>
            </div>
          </div>
          
          {/* Backend Stack */}
          <div className="skills-card">
            <h3 className="skills-title"><span className="icon"><BiServer /></span> Back-End & DB</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon py"><FaPython /></span>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon flask"><SiFlask /></span>
                <span>Flask</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon db"><SiMysql /></span>
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon node"><FaNodeJs /></span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
          
          {/* Tools & Other */}
          <div className="skills-card">
            <h3 className="skills-title"><span className="icon"><BiWrench /></span> Tools</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon git"><FaGitAlt /></span>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon github"><FaGithub /></span>
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon figma"><FaFigma /></span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
