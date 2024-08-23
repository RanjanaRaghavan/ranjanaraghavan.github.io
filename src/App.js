import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection';
import TechnologiesCarousel from './components/TechnologiesCarousel';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <TechnologiesCarousel />
      <ProjectsSection />
    </div>
  );
}

export default App;
