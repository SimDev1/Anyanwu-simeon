import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const projectData = [
  {
    image: '/property.png',
    title: 'Properties Hub',
    description:
      'A property website for renting, buying and selling properties across Nigeria. Land and Hosing Agents can connect and buyers can easily locate properties.',
    tech: ['HTML', 'Node.js', 'Material UI', 'Alpine.js', 'AOS', 'Stripe'],
    link: 'https://propertieshub.org',
    status: 'Live',
  },
  {
    image: '/isurvive.png',
    title: 'Gospel Blog',
    description:
      'A blog for gospel artist, where gospel videos and audios can be uploaded. Streaming of gospel songs and live podcast also integrated',
    tech: ['HTML', 'Tailwind', 'MySQL', 'AOS', 'Vanilla.js'],
    link: 'https://gospel-music-blog-1rsp.vercel.app/',
    status: 'Live',
  },
  {
    image: '/profilesite.png',
    title: 'Profile Site',
    description:
      'A site designed for a young developer with advanced tech skills. Contains works done by the developer, customer feedback and Contact. There is joy in collaboration.',
    tech: ['React', 'Material UI', 'Tailwind', 'HTML'],
    status: 'Under-Development',
  },
  {
    image: '/educonnect.jpeg',
    title: 'EduConnect',
    description:
      'A platform connecting students with online tutors and learning resources in real time. Resources for learning can also be downloaded at ease to enhance learning.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://educonnect.io',
    status: 'Live',
  },
  {
    image: '/buyam.png',
    title: 'Buyam',
    description:
      'An ecommerce site. You can buy all sorts of products at your convenience. Registered users can also sell items. A secured payment platform is also integrated to track fraudulent transactions.',
    tech: ['Next.js', 'Tailwind', 'Firebase', 'Express', 'Stripe'],
    link: 'https://my-ecommerce-pages.vercel.app/',
    status: 'Live',
  },
  {
    image: '/profile.png',
    title: 'Portfolio V2',
    description:
      'Revamped personal portfolio featuring interactive animations, project showcase, and contact integration.',
    tech: ['React', 'MUI', 'Framer Motion'],
    status: 'Under-Development',
  },
];

const Jobs = () => {
  return (
    <Box
      id="Projects"
      sx={{
        py: 8,
        px: 2,
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        color: '#fff',
      }}
    >
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                width: 300,
                backgroundColor: '#111',
                color: '#fff',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0, 224, 255, 0.05)',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: '#222',
                        color: '#0ef',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
                {project.status === 'Live' ? (
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      mt: 1,
                      backgroundColor: '#008080',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: 2,
                    }}
                  >
                    Visit Site
                  </Button>
                ) : (
                  <Button
                    disabled
                    startIcon={<LockIcon />}
                    sx={{
                      mt: 1,
                      backgroundColor: '#333',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 2.5,
                      py: 1.2,
                    }}
                  >
                    Under Development
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
