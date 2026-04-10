import React from 'react';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header reveal active">
          <h2 className="section-title">Journey</h2>
          <span className="section-subtitle">Education & Experience</span>
        </div>
        
        <div className="timeline-container reveal active delay-1">
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 - Present</span>
                <h3 className="timeline-title">B.S. Information Technology</h3>
                <span className="timeline-company">University Name</span>
                <p className="timeline-desc">
                  Focused on software engineering, database management, and web development. Active member of the coding club.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 (Summer)</span>
                <h3 className="timeline-title">Web Development Intern</h3>
                <span className="timeline-company">Tech Solutions Inc.</span>
                <p className="timeline-desc">
                  Collaborated with a team of developers to build responsive UI components. Optimised front-end performance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
