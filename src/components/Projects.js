import React from 'react';
import { Box, Card, Typography, Grid, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTools, FaCode, FaStar } from 'react-icons/fa';

const Projects = () => {
  const services = [
    {
      title: 'Elite UI/UX Design',
      description:
        'Award-winning interfaces with meticulous attention to detail. Mobile-first designs that drive engagement and conversions.',
      tag: 'HIGH DEMAND',
      tagColor: '#00FFFF',
      icon: <FaTools size={24} color="#00FFFF" />,
    },
    {
      title: 'Full-Stack Development',
      description:
        'High-performance web applications built with React/Next.js. Clean, maintainable code with perfect Lighthouse scores.',
      tag: 'BEST VALUE',
      tagColor: '#A020F0',
      icon: <FaCode size={24} color="#A020F0" />,
    },
    {
      title: 'Complete Digital Solution',
      description:
        'End-to-end project execution: Stunning UI/UX design + Robust development + Basic security/Web3 integration. The ultimate package.',
      tag: 'PREMIUM PACKAGE',
      tagColor: '#1e90ff',
      icon: <FaStar size={24} color="#1e90ff" />,
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 2,
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        color: '#fff',
      }}
    >
      {/* Animated Horizontal Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mb: 6,
        }}
      >
        {services.slice(0, 2).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              sx={{
                flex: '1 1 420px',
                maxWidth: 420,
                backgroundColor: '#121212',
                border: `1px solid ${service.tagColor}`,
                borderRadius: 4,
                p: 4,
                color: 'white',
              }}
              elevation={0}
            >
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box
                  sx={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '50%',
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {service.icon}
                </Box>

                <Chip
                  label={service.tag}
                  sx={{
                    backgroundColor: service.tagColor,
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 10,
                  }}
                  size="small"
                />
              </Box>

              <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#fff' }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#ddd' }}>
                {service.description}
              </Typography>

              <Divider sx={{ my: 3, backgroundColor: '#2a2a2a' }} />

              <Typography variant="caption" sx={{ color: '#aaa' }}>
                Custom Pricing Based on Project Scope
              </Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                Let&apos;s Discuss Your Needs!
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Third Card */}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Card
            sx={{
              backgroundColor: '#121212',
              border: `1px solid ${services[2].tagColor}`,
              borderRadius: 4,
              p: 4,
              color: 'white',
            }}
            elevation={0}
          >
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
              <Box
                sx={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {services[2].icon}
              </Box>

              <Typography
                sx={{ fontSize: 12, fontWeight: 'bold', color: services[2].tagColor }}
              >
                {services[2].tag}
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#fff' }}>
              {services[2].title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#ddd' }}>
              {services[2].description}
            </Typography>

            <Divider sx={{ my: 3, backgroundColor: '#2a2a2a' }} />

            <Typography variant="caption" sx={{ color: '#aaa' }}>
              Custom Pricing Based on Project Scope
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              Let&apos;s Discuss Your Needs!
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
