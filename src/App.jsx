import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material'
import { keyframes } from '@mui/system';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import Skills from './components/Skills';

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4d4d', // Red color
      light: '#ff7373',
      dark: '#cc0000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3d3d3d', // Dark gray
      light: '#575757',
      dark: '#1a1a1a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f1118',
      paper: '#171923',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 600,
      marginBottom: '1.5rem',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 6px rgba(0,0,0,0.05)',
    '0px 6px 8px rgba(0,0,0,0.05)',
    '0px 8px 12px rgba(0,0,0,0.05)',
    // ...rest of the shadows remain default
    ...Array(20).fill(''),
  ].filter((_, i) => i <= 4 || _ !== ''),
});

// Define the pulse animation
const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.5;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <Box sx={{
        background: 'linear-gradient(to bottom, #0c0c14 0%, #161622 100%)',
        backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(255, 77, 77, 0.15) 0%, transparent 35%), radial-gradient(circle at 85% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 40%)',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
          opacity: 0.7,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          animation: `${pulse} 4s ease-in-out infinite`,
          zIndex: 0
        }
      }}>
        <Header />
        
        <Box sx={{ position: 'relative', zIndex: 1, pt: 8 }}>
          <About />
          <Skills /> {/* Add this line to include the Skills component */}
          <Projects />
          <Experience />
          <Education />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
