import React from 'react';
import './IntroSection.css'; // Add some styles later
import Grid from '@mui/material/Unstable_Grid2';

function IntroSection() {
  return (
    <Grid container spacing={2} columns={16}>
    <Grid xs={8}>
      <div className="intro-text">
        <h1>Ranjana Raghavan</h1>
        <p>I solemnly swear that I am up to no good.</p>
      </div>
    </Grid>
    <Grid xs={8}>
      <div className="intro-photo">
        <img src={require('../assets/Me.png')} alt="Ranjana Raghavan" />
      </div>
    </Grid>
  </Grid>
  );
}

export default IntroSection;
