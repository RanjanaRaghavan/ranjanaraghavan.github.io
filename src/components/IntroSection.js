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
              >
                Hello, I’m Ranjana. I’m a software engineer with 5 years of experience in web development, specializing in Python, JavaScript, and modern web technologies. I focus on building scalable, secure, and high-performance applications.

Recently, I’ve been expanding into AI—exploring machine learning concepts and building projects that apply AI to real-world problems. I’m also polishing my React skills, with this website being one of my practice projects.

I’m passionate about technology, adaptable to new challenges, and motivated by creating solutions that have impact.
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