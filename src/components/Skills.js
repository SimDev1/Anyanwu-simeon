import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiMui,
  SiGit,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" />, color: '#3178C6' },
    { name: 'HTML5', icon: <SiHtml5 size={40} color="#E34F26" />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 size={40} color="#1572B6" />, color: '#1572B6' },
    { name: 'React', icon: <SiReact size={40} color="#61DAFB" />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} color="#ffffff" />, color: '#ffffff' },
    { name: 'MySQL', icon: <SiMysql size={40} color="#00758F" />, color: '#00758F' },
    { name: 'Node.js', icon: <SiNodedotjs size={40} color="#68A063" />, color: '#68A063' },
    { name: 'MUI', icon: <SiMui size={40} color="#007FFF" />, color: '#007FFF' },
    { name: 'Git', icon: <SiGit size={40} color="#F1502F" />, color: '#F1502F' },
  ];

  const counters = [
    { end: 17, label: 'Projects Completed ✏️' },
    { end: 9, label: 'Awards Won 🏆' },
    { end: 17, label: 'Happy Clients ☀️' },
  ];

  const [ref, inView] = useInView({ threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [inView]);

  return (
    <Box
      id="Skills"
      sx={{
        py: 8,
        px: 2,
        maxWidth: '100%',
        mx: 'auto',
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        color: 'white',
      }}
    >
      {/* Stats Section */}
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          gap: 4,
          mb: 8,
          flexWrap: 'wrap',
        }}
      >
        {counters.map((item, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: '#121212',
              borderRadius: '20px',
              padding: 4,
              boxShadow: '0 0 30px rgba(0, 224, 255, 0.1)',
              textAlign: 'center',
              minWidth: 220,
              flex: '1 1 250px',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
              {startCount ? <CountUp end={item.end} duration={2} /> : 0}
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Technical Expertise Section */}
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'medium',
            mb: 4,
            pb: 2,
            borderBottom: '2px solid',
            borderColor: 'gray',
          }}
        >
          Technical Expertise
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 20px rgba(0,224,255,0.4)',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#2c2c2c',
                    borderRadius: '16px',
                    padding: 3,
                    width: 170,
                    textAlign: 'center',
                    boxShadow: '0 0 15px rgba(0, 224, 255, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                  }}
                >
                  <Box mb={1}>{skill.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: skill.color, fontSize: '1.2rem' }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
