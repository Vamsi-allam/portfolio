import { 
  Box, 
  Typography, 
  Grid, 
  IconButton, 
  Link,
  Container,
  Divider
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LanguageIcon from '@mui/icons-material/Language'

function Footer() {
  return (
    <Box 
      component="footer" 
      id="contact"
      sx={{ 
        bgcolor: '#0a0a0a',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 8,
        borderRadius: '20px 20px 0 0',
        backgroundImage: 'linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(15, 15, 15, 0.9) 100%)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%23ff4d4d\' fill-opacity=\'0.07\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '120px 120px',
          opacity: 0.2,
          zIndex: 0,
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} justifyContent="space-between">
          <Grid columns={12} md={6} lg={5}>
            <Typography variant="h4" component="h3" gutterBottom color="primary.main" sx={{ fontWeight: 600, mb: 3 }}>
              Contact Me
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body1">vamsiallam77@gmail.com</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body1">+91 7993686177</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LocationOnIcon sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body1">Hyderabad, India</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LanguageIcon sx={{ mr: 2, color: 'primary.light' }} />
              <Typography variant="body1">English, Telugu</Typography>
            </Box>
          </Grid>
          
          <Grid columns={12} md={5} lg={4}>
            <Typography variant="h4" component="h3" gutterBottom color="primary.light" sx={{ fontWeight: 600, mb: 3 }}>
              Connect With Me
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                component={Link} 
                href="https://www.linkedin.com/in/vamsi-allam-14331424b/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              
              <IconButton 
                component={Link} 
                href="https://github.com/Vamsi-allam" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              
              <IconButton 
                component={Link} 
                href="https://x.com/VamsiAllam7" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" fill="currentColor"/>
                </svg>
              </IconButton>
              
              <IconButton 
                component={Link} 
                href="https://wa.me/917993686177" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              
              <IconButton 
                component={Link} 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vamsiallam77@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Typography variant="body2" align="center" sx={{ 
            opacity: 0.7, 
            pb: 1,
            fontWeight: 500,
            letterSpacing: 1
          }}>
            &copy; {new Date().getFullYear()} Vamsi Allam. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer