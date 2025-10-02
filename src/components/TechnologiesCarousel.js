// src/components/TechnologiesCarousel.js
import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import './TechnologiesCarousel.css';

function TechnologiesCarousel() {
  const technologies = [
    "python", "nodejs", "reactjs", "aws", "js", "java", "ts", "css", "html", "angular", "swift", "openai", "llama-index",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Define navigation handlers first
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [technologies.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + technologies.length) % technologies.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [technologies.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, technologies.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, handleNext, handlePrev]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const getItemStyle = (index) => {
    const diff = (index - activeIndex + technologies.length) % technologies.length;
    
    // Calculate position based on difference
    let translateX = 0;
    let opacity = 1;
    let scale = 1;
    let zIndex = 1;
    let filter = 'none';

    if (diff === 0) {
      // Active card - center
      translateX = 0;
      opacity = 1;
      scale = 1;
      zIndex = 3;
      filter = 'none';
    } else if (diff === -1 || diff === technologies.length - 1) {
      // Previous card - left
      translateX = -80;
      opacity = 0.8;
      scale = 0.85;
      zIndex = 2;
      filter = 'brightness(0.8)';
    } else if (diff === 1 || diff === -(technologies.length - 1)) {
      // Next card - right
      translateX = 80;
      opacity = 0.8;
      scale = 0.85;
      zIndex = 2;
      filter = 'brightness(0.8)';
    } else if (diff === -2 || diff === technologies.length - 2) {
      // Far left
      translateX = -120;
      opacity = 0.6;
      scale = 0.7;
      zIndex = 1;
      filter = 'brightness(0.6)';
    } else if (diff === 2 || diff === -(technologies.length - 2)) {
      // Far right
      translateX = 120;
      opacity = 0.6;
      scale = 0.7;
      zIndex = 1;
      filter = 'brightness(0.6)';
    } else {
      // Hidden cards
      translateX = diff > 0 ? 160 : -160;
      opacity = 0;
      scale = 0.6;
      zIndex = 0;
      filter = 'brightness(0.4)';
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      filter: filter,
    };
  };

  return (
    <div className="carousel-wrapper" id="technologies-carousel">
      <Typography variant="h2" component="h1" className="carousel-title" align="center">
        My Toolbox
      </Typography>
      
      <div className="carousel-container">
        <div 
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          role="region"
          aria-label="Technologies carousel"
          aria-live="polite"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="carousel-item"
              style={getItemStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="tech-card">
                <img 
                  src={require(`../assets/${tech.toLowerCase()}.png`)} 
                  alt={tech} 
                  className="tech-logo" 
                />
                <div className="tech-name">{tech}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          className="toolbox_button prev" 
          onClick={handlePrev}
          aria-label="Previous technology"
        >
          ←
        </button>
        <button 
          className="toolbox_button next" 
          onClick={handleNext}
          aria-label="Next technology"
        >
          →
        </button>

        {/* Auto-play indicator */}
        <div className="auto-play-indicator">
          <button
            className={`auto-play-toggle ${isAutoPlaying ? 'playing' : 'paused'}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesCarousel;