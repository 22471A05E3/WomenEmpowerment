import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>WebPage</h3>
          <p>I Develop a webpage using Html and css</p>
        </div>
        <div className="project-item">
          <h3>CSP</h3>
          <p>I develop the community service project.And create a webpage using Html,Css,Angular</p>
        </div>
        <div className="project-item">
          <h3>React</h3>
          <p>It is my on going project</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
