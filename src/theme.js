import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Tech Blue
      light: '#60a5fa',
      dark: '#1e40af',
    },
    secondary: {
      main: '#0891b2', // Professional Teal
      light: '#22d3ee',
      dark: '#155e75',
    },
    background: {
      default: '#f8fafc', // Very soft slate (almost white)
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
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
      color: '#0f172a',
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
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 8, // Slightly more square for professional tech look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Match professional look
          padding: '10px 24px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
          color: '#ffffff',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)',
            transform: 'translateY(-2px)',
          }
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #0891b2 0%, #155e75 100%)',
          boxShadow: '0 4px 12px rgba(8, 145, 178, 0.25)',
          color: '#ffffff',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(8, 145, 178, 0.35)',
            transform: 'translateY(-2px)',
          }
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            transform: 'translateY(-2px)',
            background: 'rgba(37, 99, 235, 0.04)',
          }
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          color: '#0f172a',
        }
      }
    }
  },
});

export default theme;
