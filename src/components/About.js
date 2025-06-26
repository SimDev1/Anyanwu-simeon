import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      id="about"
      my={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={2}
      sx={{
        perspective: 1000,
        zIndex: 1,
      }}
    >
      {/* Flip Card Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          position: 'relative',
          transition: 'transform 0.8s',
        }}
      >
        {/* Front & Back Cards */}
        <Box sx={{ position: 'relative' }}>
          {/* Front Side */}
          <Card
            sx={{
              display: flipped ? 'none' : 'block',
              borderRadius: 4,
              background: 'linear-gradient(135deg, #ff5722, #ff9800)',
              color: 'white',
              padding: 4,
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Roboto, Inter, sans-serif',
                  fontWeight: 700,
                  color: '#fdd835',
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Inter, Roboto, sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                I'm a creative front-end developer with a deep passion for building smooth,
                interactive, and visually appealing web experiences.
                <br /><br />
                I enjoy crafting clean and intuitive user interfaces, combining design with
                functionality to bring ideas to life on the web.
              </Typography>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            sx={{
              display: flipped ? 'block' : 'none',
              borderRadius: 4,
              background: 'linear-gradient(135deg, #7b4397, #dc2430)',
              color: 'white',
              padding: 4,
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Inter, Roboto, sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                My skill set includes:
                <br /><br />
                <strong>Front-End:</strong> HTML, CSS, JavaScript, React.js – creating dynamic, responsive, and user-friendly interfaces.
                <br /><br />
                <strong>Back-End:</strong> Node.js – developing RESTful APIs and integrating front-end apps with powerful server-side logic.
                <br /><br />
                <strong>Styling:</strong> Expert in using Material UI and Tailwind CSS to build clean, modern, and responsive designs that elevate user experience.
                <br /><br />
                I'm continuously learning and exploring new web technologies to stay ahead and deliver the best solutions.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Flip Button always below the cards */}
      <Button
        variant="contained"
        onClick={() => setFlipped(!flipped)}
        sx={{
          background: 'linear-gradient(45deg, #ff9800, #f44336)',
          color: 'white',
          fontFamily: 'Inter, Roboto, sans-serif',
          fontWeight: 'bold',
          fontSize: '1rem',
          mt: 2,
          px: 4,
          py: 1,
          '&:hover': {
            background: 'linear-gradient(45deg, #f44336, #ff9800)',
          },
        }}
      >
        {flipped ? 'Go Back' : 'Learn More'}
      </Button>
    </Box>
  );
}

export default About;
