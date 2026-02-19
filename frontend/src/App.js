import React, { useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

import SentimentAnalyzer from "./SentimentAnalyzer";
import YTSentimentAnalyzer from "./YTSentimentAnalyzer";
import AmazonSentimentAnalyzer from "./AmazonSentimentAnalyzer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#0a1929', // Professional dark blue-grey
      paper: '#001e3c',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});

function App() {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Twitter', path: '/Twitter' },
    { text: 'YouTube', path: '/YouTube' },
    { text: 'Amazon', path: '/Amazon' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SentimentAI
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  color: location.pathname.includes(item.text) ? 'primary.main' : 'text.primary'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
                SentimentAI
              </Typography>

              {!isMobile && (
                <Box>
                  <Button component={Link} to="/Twitter" color="inherit" sx={{ mx: 1, color: location.pathname.includes('Twitter') || location.pathname === '/' ? 'primary.main' : 'text.secondary' }}>Twitter</Button>
                  <Button component={Link} to="/YouTube" color="inherit" sx={{ mx: 1, color: location.pathname.includes('YouTube') ? 'primary.main' : 'text.secondary' }}>YouTube</Button>
                  <Button component={Link} to="/Amazon" color="inherit" sx={{ mx: 1, color: location.pathname.includes('Amazon') ? 'primary.main' : 'text.secondary' }}>Amazon</Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Container maxWidth="md" sx={{ mt: { xs: 4, md: 8 }, mb: 4, px: { xs: 2, md: 3 } }}>
          <Routes>
            <Route path="/" Component={SentimentAnalyzer} />
            <Route exact path="/Twitter" Component={SentimentAnalyzer} />
            <Route path="/YouTube" Component={YTSentimentAnalyzer} />
            <Route path="/Amazon" Component={AmazonSentimentAnalyzer} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
