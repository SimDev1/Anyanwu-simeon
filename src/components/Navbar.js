import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Technical Expertise', href: '#Skills' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawerContent = (
    <Box
      sx={{
        width: '100%',
        maxWidth: 300,
        backgroundColor: '#111',
        height: '100%',
        color: '#fff',
        py: 3,
        boxSizing: 'border-box',
      }}
      onClick={toggleDrawer}
    >
      <Typography
        variant="h6"
        component="a"
        href="#about"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontFamily: 'Inter, Roboto, sans-serif',
          mb: 3,
          textDecoration: 'none',
          color: '#00e0ff',
          display: 'block',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            color: '#00ffff',
          },
        }}
      >
        SimDev
      </Typography>

      <Divider sx={{ borderColor: '#222', mb: 2 }} />

      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              transition: 'all 0.3s ease',
              color: '#00e0ff',
              whiteSpace: 'nowrap',
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                fontFamily: 'Inter, Roboto, sans-serif',
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide in direction="down">
        <AppBar
          position="fixed"
          elevation={2}
          sx={{
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            width: '100%',
            left: 0,
            top: 0,
            zIndex: 1300,
            overflowX: 'hidden',
          }}
        >
          <Toolbar
            sx={{
              px: { xs: 2, sm: 4 },
              width: '100%',
              overflowX: 'hidden',
              m: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              component="a"
              href="#about"
              sx={{
                flexGrow: 1,
                fontFamily: 'Inter, Roboto, sans-serif',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: 1,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#00e0ff',
                },
              }}
            >
              SimDev
            </Typography>

            {isMobile ? (
              <Box
                onClick={toggleDrawer}
                sx={{
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#00e0ff22',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <MenuIcon sx={{ color: '#00e0ff' }} />
              </Box>
            ) : (
              navItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    ml: 3,
                    fontFamily: 'Inter, Roboto, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#00e0ff',
                      transform: 'scale(1.05)',
                    },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Typography>
              ))
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: 300,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
