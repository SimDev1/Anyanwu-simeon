import React from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TikTokIcon from '@mui/icons-material/MusicNote';
import { motion } from 'framer-motion';

const socialIcons = [
  {
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/simdev1',
    delay: 0,
  },
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/simdev1',
    delay: 0.1,
  },
  {
    icon: <InstagramIcon />,
    href: 'https://instagram.com/simdev1',
    delay: 0.2,
  },
  {
    icon: <TikTokIcon />,
    href: 'https://tiktok.com/@simdev1',
    delay: 0.3,
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#ccc', px: 6, pt: 8 }}>
      <Grid container spacing={6} justifyContent="space-between">
        {/* Logo & Description */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00bfff' }}>
            SimDev<sup>®</sup>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Pioneering secure digital transformation through cutting-edge web solutions and ethical security practices. ISO 27001 certified.
          </Typography>
        </Grid>

        {/* Operations */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
            Operations
          </Typography>
          <Typography variant="body2">Web Architecture</Typography>
          <Typography variant="body2">Security Audits</Typography>
          <Typography variant="body2">Consulting</Typography>
        </Grid>

        {/* Social Icons with Animation */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
            Connect
          </Typography>
          <Stack direction="row" spacing={1}>
            {socialIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                <IconButton
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ backgroundColor: '#111', color: '#fff' }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Grid>

        {/* Location */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
            Location
          </Typography>
          <Typography variant="body2">Anambra, Nigeria</Typography>
          <Typography variant="body2">San Francisco, USA</Typography>
          <Typography variant="body2">Berlin, Germany</Typography>
          <Typography variant="body2">Dubai, UAE</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: '#111', my: 4 }} />

      {/* Bottom Bar */}
      <Box sx={{ textAlign: 'center', pb: 3 }}>
        <Typography variant="body2" color="#aaa">
          © 2025 SimDev<sup>®</sup> TECHNOLOGIES. All rights reserved.
        </Typography>
        <Typography variant="caption" color="#666">
          PCI-DSS Compliant | GDPR Ready
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
