import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import './HeaderSection.css';
import NavBar from './NavBar.js';

function HeaderSection() {

    const openGitHub = () => {
        window.open('https://github.com/RanjanaRaghavan', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="HeaderSection">
            <header className="fixed-header">
              <NavBar/>
            </header>
            <main className="main-content">
                <h1>Hey there! My name is</h1>
                <h2 className="name">Ranjana<br />Raghavan.</h2>
                <h1>I develop web applications from end-to-end!<br />I also am learning Violin</h1>
                <button id="github-button" onClick={openGitHub}><GitHubIcon /> My Github</button>
            </main>
        </div>
    );
}

export default HeaderSection;