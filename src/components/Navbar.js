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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'About', href: '#About' },
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
        width: 240,
        backgroundColor: '#111',
        height: '100%',
        color: '#fff',
        py: 3,
      }}
      onClick={toggleDrawer}
    >
      <Typography
          variant="h6"
          component="a"
          href="#About"
          sx={{
              flexGrow: 1,
              fontFamily: 'Inter, Roboto, sans-serif',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: 1,
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
              color: '#00e0ff',
          },
        }}
>
  SimDev
</Typography>

      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
              color: '#00e0ff',
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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'Inter, Roboto, sans-serif',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: 1,
            }}
          >
            SimDev
          </Typography>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
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
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#00e0ff',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
