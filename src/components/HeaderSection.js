import React from 'react';
import './HeaderSection.css';
import Grid from '@mui/material/Grid';

function HeaderSection() {
    return (
        <div className="HeaderSection">
            <Grid container className="header">
                <Grid item xs={3}>
                    <div className="logo">RR</div>
                </Grid>
                <Grid item xs={9}>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Toolbox</li>
                            <li>Git Hub</li>
                            <li>Resume</li>
                        </ul>
                    </nav>
                </Grid>
            </Grid>
            <main>
                <h1>Hey there! My name is</h1>
                <h2 className="name">Ranjana<br />Raghavan.</h2>
                <h1>I develop web applications from end-to-end!<br />I also am learning Violin</h1>
                <button>Get in touch</button>
            </main>
        </div>
    );
}

export default HeaderSection;