import { 
  Box, 
  Typography, 
  Container, 
  Button,
  Stack,
  Chip
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import DownloadIcon from '@mui/icons-material/Download'
import profile from '../assets/profile.jpg'
import resumePDF from '../assets/Vamsi_Kumar_Allam.pdf'


function About() {
  const scrollToProjects = () => {
    const section = document.getElementById('projects')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box id="about" component="section" sx={{ py: 0, pt:10 }}>
      <Container>
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          gutterBottom
          sx={{ mb: 6, color: 'white', position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2
            }
          }}
        >
          About Me
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6
          }}
        >
          {/* Left side content */}
          <Box 
            sx={{ 
              flex: '1 1 60%', 
              order: { xs: 2, md: 1 },
              width: '100%' 
            }}
          >
            <Typography variant="h3" component="h3" gutterBottom color="primary.main" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
              Hi, I'm Vamsi Kumar Allam
            </Typography>
            <Typography variant="h5" component="h4" gutterBottom sx={{ color: 'text.secondary', mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
              Software Developer
            </Typography>
            
            <Typography paragraph sx={{ color: 'text.primary', mb: 4, fontSize: '1.1rem', lineHeight: 1.7, textAlign: { xs: 'center', md: 'left' } }}>
              I am an enthusiastic and passionate web developer who values teamwork and clear communication. 
              Driven by a strong passion for web development, I am committed to continuous growth and learning. 
              With a solid foundation in modern web technologies, I strive to create innovative and user-friendly 
              solutions that make a meaningful impact. My dedication to collaboration and adaptability allows me 
              to thrive in dynamic and fast-paced environments, where I can contribute to building exceptional 
              software products.
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ 
                mb: 4,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                onClick={scrollToProjects}
                startIcon={<OpenInNewIcon />}
                sx={{ 
                  py: 1.5, 
                  px: 4, 
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(255, 77, 77, 0.4)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 77, 77, 0.6)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                View My Work
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={scrollToContact}
                startIcon={<EmailIcon />}
                sx={{ 
                  py: 1.5, 
                  px: 4,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderWidth: 2,
                  borderColor: '#3b82f6',
                  color: '#3b82f6',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href={resumePDF}
                download="Vamsi_Kumar_Allam.pdf"
                startIcon={<DownloadIcon />}
                size="large"
                sx={{
                  py: 1.5, 
                  px: 4,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(255, 77, 77, 0.08)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Download CV
              </Button>
            </Stack>

            <Stack 
              direction="row" 
              spacing={2}
              sx={{ 
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button 
                startIcon={<GitHubIcon />}
                href="https://github.com/Vamsi-allam"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  py: 1,
                  px: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                GitHub
              </Button>
              <Button 
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/vamsi-allam-14331424b/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(59, 130, 246, 0.1)', 
                  py: 1,
                  px: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    bgcolor: 'rgba(59, 130, 246, 0.2)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                LinkedIn
              </Button>
              <Button 
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/917993686177"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(37, 211, 102, 0.1)', 
                  py: 1,
                  px: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    bgcolor: 'rgba(37, 211, 102, 0.2)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                WhatsApp
              </Button>
              <Button 
                startIcon={<EmailIcon />}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vamsiallam77@gmail.com" // Replace with your actual email address
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(234, 67, 53, 0.1)', // Gmail red color
                  py: 1,
                  px: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    bgcolor: 'rgba(234, 67, 53, 0.2)',
                    transform: 'translateY(-2px)'
                  } 
                }}
              >
                Gmail
              </Button>
            </Stack>
          </Box>
          
          {/* Right side photo */}
          <Box 
            sx={{ 
              flex: '1 1 40%', 
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 6, md: 0 }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '280px',
                height: '340px',
                padding: '12px',
                borderRadius: '8px',
                background: 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(60,60,60,0.4))',
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '8px',
                  padding: '2px',
                  background: 'linear-gradient(135deg, rgba(255,77,77,0.6) 0%, rgba(70,70,70,0.3) 50%, rgba(30,30,30,0.1) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none'
                }
              }}
            >
              <Box
                component="img"
                src={profile}
                alt="Vamsi Kumar Allam"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '4px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default About