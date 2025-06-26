import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const Preloader = () => {
  const [blink, setBlink] = useState(false);
  const [progress, setProgress] = useState(0);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150); // Blink duration
    }, Math.random() * (5000 - 2000) + 2000); // Random interval between 2s–5s

    return () => clearInterval(blinkInterval);
  }, []);

  // Progress bar simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 100 : old + 2));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#0f0f0f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Neon AI Eyes */}
      <Box sx={{ display: 'flex', gap: 8, mb: 4 }}>
        <Box
          className={`eye ${blink ? 'blink' : ''}`}
          sx={{ width: 50, height: 50 }}
        />
        <Box
          className={`eye ${blink ? 'blink' : ''}`}
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      {/* Loading Text */}
      <Typography variant="h6" color="white" sx={{ mb: 2 }}>
        SimDev | Web - Tech...
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ width: '60%', maxWidth: 400 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#333',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(to right, #00e0ff, #9146ff)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Preloader;
