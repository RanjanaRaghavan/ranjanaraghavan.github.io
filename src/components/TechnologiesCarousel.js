// src/components/TechnologiesCarousel.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Technologies.css';

function TechnologiesCarousel() {
  const technologies = ["angular","angular","angular","angular"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="carousel-container">
   <Slider {...settings}>
  {technologies.map((tech, index) => (
    <div key={index} className="tech-card">
      <img src={require(`../assets/${tech}.png`)} alt={tech} className="tech-logo" />
      <h3>{tech}</h3>
    </div>
  ))}
</Slider>

    </div>
  );
}

export default TechnologiesCarousel;
