import React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';

import './HeaderSection.css';
import Logo from './logo.js';
import NavBar from './NavBar.js';

function HeaderSection() {
    return (
        <div className="HeaderSection">
            <Grid container className="header">
                <Grid item xs={3}>
                    <Logo />
                </Grid>
                <Grid item xs={9}>
                    <NavBar/>
                </Grid>
            </Grid>
            <main>
                <h1>Hey there! My name is</h1>
                <h2 className="name">Ranjana<br />Raghavan.</h2>
                <h1>I develop web applications from end-to-end!<br />I also am learning Violin</h1>
                <button><GitHubIcon /> My Github</button>
            </main>
        </div>
    );
}

export default HeaderSection;