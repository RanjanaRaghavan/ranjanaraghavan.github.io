// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';
import jigSawgptScreenshot from '../assets/jigSawgpt.png';

function ProjectsSection() {
  const projects = [
    {
      title: "JigSawGPT",
      description: "A chatbot that uses GPT-4 to answer questions about the Jigsaw puzzle game.",
      technologies: ["REACT", "NEXT.JS", "OPENAI"],
      websiteUrl: "#",
      sourceCodeUrl: "#",
      screenshotUrl: jigSawgptScreenshot
    },
    {
      name: "Project 2",
      description: "Description of project 2.",
      link: "http://github.com/project2"
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">{tech}</span>
              ))}
            </div>
          )}
          {project.screenshotUrl && (
            <div className="project-screenshot">
              <img src={project.screenshotUrl} alt={`${project.title} screenshot`} />
            </div>
          )}
          <div className="project-links">
            {project.websiteUrl && (
              <a href={project.websiteUrl} className="project-link">
                Website
              </a>
            )}
            {project.sourceCodeUrl && (
              <a href={project.sourceCodeUrl} className="project-link">
                Source Code
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsSection;