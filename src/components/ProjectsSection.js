// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';
import jigSawgptScreenshot from '../assets/jigSawgpt.png';
import harrypotterScreenshot from '../assets/Riddle.png';

function ProjectsSection() {
  const projects = [
    {
      title: "JigSawGPT",
      description: "A chatbot that uses GPT-4 to answer questions about the Jigsaw puzzle game.",
      technologies: ["REACT", "NEXT.JS", "OPENAI"],
      websiteUrl: "#",
      sourceCodeUrl: "https://github.com/RanjanaRaghavan/JigsawGPT",
      screenshotUrl: jigSawgptScreenshot
    },
    {
      title: "Chat with Riddle",
      description: "RAG chatbot that answers questions about the Harry Potter series.",
      technologies: ["REACT", "DENO", "OPENAI"],
      websiteUrl: "#",
      sourceCodeUrl: "https://github.com/RanjanaRaghavan/RAG_Deno_Fullstack",
      screenshotUrl: harrypotterScreenshot
    },
  ];

  return (
    <section className="projects-section" id="projects-section">
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