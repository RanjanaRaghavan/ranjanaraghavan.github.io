// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css'; // Add some styles later

function ProjectsSection() {
  const projects = [
    {
      name: "Project 1",
      description: "Description of project 1.",
      link: "http://github.com/project1"
    },
    {
      name: "Project 2",
      description: "Description of project 2.",
      link: "http://github.com/project2"
    },
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
