import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Stack,
  Chip,
  useMediaQuery,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTheme } from '@mui/material/styles';

function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="About"
      sx={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        color: 'white',
        px: { xs: 2, sm: 6 },
        py: { xs: 6, sm: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1, mb: { xs: 6, md: 0 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            mb: 2,
            lineHeight: 1.2,
            background: 'linear-gradient(to right, #3b82f6, #00e0ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Anyanwu <br /> Simeon
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.7, mb: 2, fontWeight: 500 }}
        >
          Web developer | UI/UX Designer | Tech Enthusiast.
        </Typography>

        <Typography sx={{ maxWidth: 500, opacity: 0.85 }}>
          Crafting secure digital experiences through innovative web architecture and{' '}
          <span style={{ color: '#00e0ff' }}>database managemant</span>. Merging
          aesthetic design with military-grade security protocols.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }} flexWrap="wrap">
         <Button
  variant="outlined"
  startIcon={<WhatsAppIcon />}
  href="https://wa.me/2348074387045"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    borderColor: '#00e0ff',
    color: '#fff',
    '&:hover': { backgroundColor: '#00e0ff20' },
  }}
>
  WhatsApp Me
</Button>

<Button
  variant="outlined"
  startIcon={<TelegramIcon />}
  href="https://t.me/+2348074387045"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    borderColor: '#00e0ff',
    color: '#fff',
    '&:hover': { backgroundColor: '#00e0ff20' },
  }}
>
  Telegram Me
</Button>

        </Stack>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#121212',
            borderRadius: '20px',
            padding: { xs: 3, sm: 4 },
            boxShadow: '0 0 30px rgba(0, 224, 255, 0.1)',
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* Avatar with Glow */}
          <Box
            sx={{
              borderRadius: '50%',
              boxShadow: '0 0 40px #00e0ff88',
              width: 130,
              height: 130,
              mx: 'auto',
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              src="/profile.png"
              alt="Chimbuchi Victory"
              sx={{
                width: 120,
                height: 120,
                border: '3px solid #00e0ff',
              }}
            />
          </Box>

          {/* Details as Button-like Boxes */}
          <Stack spacing={2} alignItems="center">
            <Button
              variant="outlined"
              sx={{
                color: '#00e0ff',
                borderColor: '#00e0ff55',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              Name: <strong style={{ color: '#fff' }}>Anyanwu Simeon</strong>
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: '#00e0ff',
                borderColor: '#00e0ff55',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              Nickname: <strong style={{ color: '#fff' }}>SimDev</strong>
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: '#00e0ff',
                borderColor: '#00e0ff55',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              Contact: <strong style={{ color: '#fff' }}>+2348074387045</strong>
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: '#00e0ff',
                borderColor: '#00e0ff55',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              Status: <strong style={{ color: '#00ff88' }}>Active ✅</strong>
            </Button>

            <Box mt={1} width="100%" textAlign="left">
              <Typography variant="body2" sx={{ opacity: 0.6, mb: 1 }}>
                Languages
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="English" sx={{ backgroundColor: '#2e2e2e', color: '#fff' }} />
                <Chip label="Igbo" sx={{ backgroundColor: '#2e2e2e', color: '#fff' }} />
                <Chip label="Any Language 😁" sx={{ backgroundColor: '#2e2e2e', color: '#fff' }} />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
