import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Vivid Purple
      light: '#d0a9fd',
      dark: '#825db0',
    },
    secondary: {
      main: '#03dac6', // Cyan/Teal
      light: '#66fff9',
      dark: '#00a896',
    },
    background: {
      default: '#0d0d12', // Deep space dark
      paper: '#15151e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  typography: {
    fontFamily: '"Inter", "Outfit", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 28px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #bb86fc 0%, #825db0 100%)',
          boxShadow: '0 4px 15px rgba(187, 134, 252, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(187, 134, 252, 0.5)',
            transform: 'translateY(-2px)',
          }
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            transform: 'translateY(-2px)',
          }
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(13, 13, 18, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }
      }
    }
  },
});

export default theme;
