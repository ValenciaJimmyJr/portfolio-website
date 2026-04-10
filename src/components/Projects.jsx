import React from 'react';
import { BiFileFind, BiMapAlt, BiListCheck, BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header reveal active">
          <h2 className="section-title">My Projects</h2>
          <span className="section-subtitle">Recent Work</span>
        </div>
        
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card reveal active">
            <div className="project-img-wrapper">
               <div className="project-mockup abstract-bg-1">
                 <span className="icon"><BiFileFind /></span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Barangay e-Document Request System</h3>
              <p className="project-description">
                A streamlined web application for local barangays to handle citizen document requests online. Improved efficiency and record keeping.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Python (Flask)</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><FaGithub /> Code</a>
                <a href="#" className="project-link"><BiLinkExternal /> Live Demo</a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card reveal active delay-1">
            <div className="project-img-wrapper">
               <div className="project-mockup abstract-bg-2">
                 <span className="icon"><BiMapAlt /></span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Tourism Information System</h3>
              <p className="project-description">
                An interactive portal featuring destination guides, categorized spots, maps, and information dedicated to promoting local tourism.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><FaGithub /> Code</a>
                <a href="#" className="project-link"><BiLinkExternal /> Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card reveal active delay-2">
            <div className="project-img-wrapper">
               <div className="project-mockup abstract-bg-3">
                 <span className="icon"><BiListCheck /></span>
               </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Task Management App</h3>
              <p className="project-description">
                A modern to-do list manager with drag-and-drop functionality, categorized boards, and user authentication for personal productivity.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">LocalStorage</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link"><FaGithub /> Code</a>
                <a href="#" className="project-link"><BiLinkExternal /> Live Demo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
