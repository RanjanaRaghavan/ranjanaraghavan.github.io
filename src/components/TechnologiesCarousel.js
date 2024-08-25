// src/components/TechnologiesCarousel.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

import './TechnologiesCarousel.css';

function TechnologiesCarousel() {
  const technologies = [
    "reactjs",  "aws", "js","java", "ts", "css", "html","angular","nodejs"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + technologies.length) % technologies.length);
  };

  const getItemStyle = (index) => {
    const diff = (index - activeIndex + technologies.length) % technologies.length;
    let translateX = 0;
    let opacity = 1;
    let scale = 1;
    let zIndex = 0;

    if (diff === 0) {
      // Active card
      translateX = 0;
      zIndex = 2;
    } else if (diff === -1 || diff === technologies.length - 1) {
      // Previous card (left side)
      translateX = -60;
      opacity = 0.7;
      scale = 0.9;
      zIndex = 1;
    } else if (diff === 1 || diff === -(technologies.length - 1)) {
      // Next card (right side)
      translateX = 60;
      opacity = 0.7;
      scale = 0.9;
      zIndex = 1;
    } else {
      // Other cards
      translateX = diff > 0 ? 120 : -120;
      opacity = 0;
      scale = 0.8;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    };
  };

  return (
    <div className="carousel-wrapper" id="technologies-carousel">
      <Typography variant="h2" component="h1" className="about-me-title" align="center">
          My Toolbox
      </Typography>
      <div className="carousel-container">
        <div className="carousel">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="carousel-item"
              style={getItemStyle(index)}
            >
              <div className="tech-card">
                <img src={require(`../assets/${tech.toLowerCase()}.png`)} alt={tech} className="tech-logo" />
                {/* <h3>{tech}</h3> */}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>&#8249;</button>
        <button className="carousel-button next" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
}

export default TechnologiesCarousel;