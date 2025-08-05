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

    return (
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
                <li onClick={closeMenu}>About</li>
                <li onClick={closeMenu}>Projects</li>
                <li onClick={closeMenu}>Toolbox</li>
                <li onClick={closeMenu}>Git Hub</li>
                <li onClick={closeMenu}>Resume</li>
            </ul>
        </nav>
    );
}

export default NavBar;