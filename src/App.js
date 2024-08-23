import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection';
import TechnologiesCarousel from './components/TechnologiesCarousel';
import ProjectsSection from './components/ProjectsSection';
import HeaderSection from './components/HeaderSection';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <IntroSection />
      <TechnologiesCarousel />
      <ProjectsSection />
    </div>
  );
}

export default App;
