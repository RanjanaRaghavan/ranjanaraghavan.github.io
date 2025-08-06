// src/components/ProjectsSection.js
import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';
import { loadProjectsWebpack } from '../utils/projectLoader';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use webpack loader for Create React App compatibility
        const projectData = loadProjectsWebpack();
        setProjects(projectData);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try refreshing the page.');
      } finally {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, []);

  const handleLinkClick = (url, isExternal = false) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects available at the moment.</p>
        </div>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies && project.technologies.map((tech, index) => (
                <span key={index} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>

            {project.screenshot && (
              <div className="project-screenshot">
                <div className="project-screenshot-container">
                  <img 
                    src={project.screenshot} 
                    alt={`${project.title} screenshot`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextSibling;
                      if (placeholder) {
                        placeholder.style.display = 'block';
                      }
                    }}
                  />
                </div>
                <div className="screenshot-placeholder" style={{ display: 'none' }}>
                  <p>No screenshot available</p>
                </div>
              </div>
            )}

            <div className="project-links">
              {project.websiteUrl && project.websiteUrl !== '#' && (
                <a
                  href={project.websiteUrl}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(project.websiteUrl, true);
                  }}
                >
                  Live Demo
                </a>
              )}
              
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(project.sourceCodeUrl, true);
                  }}
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProjectsSection;