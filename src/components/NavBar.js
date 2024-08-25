import React from 'react';
import './NavBar.css';

function NavBar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul>
                <li><button onClick={() => scrollToSection('intro-section')} id="nav-button">About</button></li>
                <li><button onClick={() => scrollToSection('projects-section')} id="nav-button">Projects</button></li>
                <li><button onClick={() => scrollToSection('technologies-carousel')}id="nav-button"> Toolbox</button></li>
                <li>Git Hub</li>
                <li>Resume</li>
            </ul>
        </nav>
    );
}

export default NavBar;