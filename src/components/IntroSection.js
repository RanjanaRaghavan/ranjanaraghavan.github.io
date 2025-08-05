import React from 'react';
import './IntroSection.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import profileImage from '../assets/Me.png';  // Import the image

function IntroSection() {
  return (
    <Box className='intro-section' id="intro-section">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" className="about-me-title" align="center">
          About me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box className="intro-text-container">
              <Typography 
                variant="body1" 
                paragraph 
                className="intro-paragraph" 
                sx={{ marginLeft: '10.5%' }}
              >
                Hello! I'm Ranjana. I have 5 years of experience in the field of Web Development. I'm innovative and results-driven software engineer with over five years of experience in designing, developing, and deploying robust software solutions. Skilled in Java, JavaScript, and various web technologies, with a strong focus on delivering high-performance, scalable, and secure applications.Passionate about technology and always eager to learn and adapt to new challenges.Innovative and results-driven software engineer with over five years of experience in designing, developing, and deploying robust software solutions. Skilled in Java, JavaScript, and various web technologies, with a strong focus on delivering high-performance, scalable, and secure applications. Passionate about technology and always eager to learn and adapt to new challenges.
              </Typography>
              <Typography 
                variant="body1" 
                className="intro-paragraph"
                sx={{ marginLeft: '10.5%' }}
              >
                I am polishing my React skills right now with some projects, this website being one of them!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={profileImage} alt="profile" className="profile-image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default IntroSection;