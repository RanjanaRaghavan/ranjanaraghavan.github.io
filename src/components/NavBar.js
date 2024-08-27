import React from 'react';
import './NavBar.css';

import Logo from './logo.js';
import Grid from '@mui/material/Grid';

function NavBar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Ranjana_Raghavan_Resume.pdf';
        link.download = 'Ranjana_Raghavan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const openGitHub = () => {
        window.open('https://github.com/RanjanaRaghavan', '_blank', 'noopener,noreferrer');
    };

    return (
        <nav>
            <div className="top-nav"></div>
            <Grid container className="header">
                <Grid item xs={3}>
                    <Logo />
                </Grid>
                <Grid item xs={9}>
                    <ul>
                        <li><button onClick={() => scrollToSection('intro-section')} id="nav-button">About</button></li>
                        <li><button onClick={() => scrollToSection('projects-section')} id="nav-button">Projects</button></li>
                        <li><button onClick={() => scrollToSection('technologies-carousel')} id="nav-button">Toolbox</button></li>
                        <li><button onClick={openGitHub} id="nav-button">GitHub</button></li>
                        <li><button onClick={downloadResume} id="nav-button">Resume</button></li>
                    </ul>
                </Grid>
            </Grid>
        </nav>
    );
}

export default NavBar;