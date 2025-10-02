import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionName) => {
        closeMenu();
        
        let targetId = '';
        switch(sectionName.toLowerCase()) {
            case 'about':
                targetId = 'intro-section';
                break;
            case 'projects':
                targetId = 'projects-section';
                break;
            case 'toolbox':
                targetId = 'technologies-carousel';
                break;
            case 'git hub':
            case 'github':
                window.open('https://github.com/ranjanaraghavan', '_blank');
                return;
            case 'resume':
                window.open('/Ranjana_Raghavan_Resume.pdf', '_blank');
                return;
            default:
                return;
        }
        
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <>
            <nav>
                <button 
                    className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li onClick={() => scrollToSection('About')}>About</li>
                    <li onClick={() => scrollToSection('Projects')}>Projects</li>
                    <li onClick={() => scrollToSection('Toolbox')}>Toolbox</li>
                    <li onClick={() => scrollToSection('Git Hub')}>Git Hub</li>
                    <li onClick={() => scrollToSection('Resume')}>Resume</li>
                </ul>
            </nav>
            
            {isMenuOpen && (
                <div 
                    className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`}
                    onClick={closeMenu}
                />
            )}
        </>
    );
}

export default NavBar;