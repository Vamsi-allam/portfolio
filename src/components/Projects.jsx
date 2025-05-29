import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Grid, 
  Chip,
  Container,
  CardActionArea
} from '@mui/material'
import { useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ProjectDetails from './ProjectDetails'
import project1Image from '../assets/project1.png'
import project2Image from '../assets/project2.png'
import project3Image from '../assets/project3.png'
import project4Image from '../assets/project4.png'
import project5Image from '../assets/project5.png'
import project6Image from '../assets/project6.png'

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "ATM Monitoring System",
      description: "Developed a real-time monitoring system for ATMs that tracks temperature and cash flow. When either metric exceeds a defined threshold, the system sends alerts to admins and technicians. Technicians can modify ATM settings, while admins can only view alerts. This system helps ensure the smooth operation and maintenance of ATMs.",
      image: project1Image,
    //   image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Unsplash ATM photo
      technologies: ["React", "Spring Boot", "Redux","Azure IoT", "Azure Database","Material UI"],
      github: "https://github.com/Vamsi-allam/cognizant-intern",
      goals: "To create a robust ATM monitoring platform that ensures operational efficiency and timely maintenance through real-time alerts and role-based access.",
      challenges: "Implementing real-time alerting and role-based access control for different user types was challenging. We used websockets for instant notifications and designed a secure backend for user management.",
      duration: "5 months",
      role: "Backend Developer",
      teamSize: "5 people"
    },
    {
      id: 2,
      title: "Image Encryption App",
      description: "A secure cross-platform app for encrypting, decrypting, and managing images with advanced encryption and cloud storage.",
      image: project2Image, // We'll use the icon instead
      technologies: ["Flutter", "Firebase", "Dart","Encryption"],
      github: "https://github.com/Vamsi-allam/image-encryption",
      goals: "To provide a user-friendly, secure platform for image encryption, decryption, and cloud storage across Android, iOS, and web.",
      challenges: "Implementing robust encryption, seamless cross-platform support, and secure cloud integration with Firebase.",
      duration: "4 months",
      role: "Full Stack Developer",
      teamSize: "1 person"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills. Built with a focus on responsive design and modern aesthetics.",
      image: project3Image,
      technologies: ["React", "Material UI", "Framer Motion"],
      github: "https://github.com/Vamsi-allam/portfolio",
      goals: "To create a visually appealing portfolio that effectively showcases my work and skills to potential employers and clients.",
      challenges: "Creating smooth animations and ensuring optimal performance across devices required careful optimization of assets and animation libraries.",
      duration: "1 month",
      role: "Designer & Developer",
      teamSize: "1 person"
    },
    {
      id: 4,
      title: "Google Search Trend Analysis",
      description: "A comprehensive data analysis tool built with Python and PyTrends API, featuring regional interest comparison, search trend visualization, time-based analysis, and correlation between search terms.",
      image: project4Image, // We'll use the icon instead
    //   icon: <TrendingUpIcon sx={{ fontSize: 100, color: 'primary.light' }} />, // For use in card/dialog
      technologies: ["Python", "Pandas", "PyTrends", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/Vamsi-allam/Google-search-trend-analysis",
      goals: "To provide insightful analysis of Google search trends using regional, time-based, and correlation visualizations.",
      challenges: "Handling API rate limits, automating data processing, and creating clear, interactive visualizations.",
      duration: "2 months",
      role: "Data Analyst & Developer",
      teamSize: "1 person"
    },
    {
      id: 5,
      title: "Alumni Database Management System",
      description: "A Java desktop application for managing alumni records with a user-friendly GUI built using Java Swing and MySQL for data storage.",
      image: project5Image, // We'll use the icon instead
    //   icon: <SchoolIcon sx={{ fontSize: 100, color: 'primary.light' }} />, // For use in card/dialog
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/Vamsi-allam/Alumni-Database",
      goals: "To provide educational institutions with an efficient tool for managing alumni information, supporting CRUD operations and search features.",
      challenges: "Ensuring robust database connectivity, user-friendly GUI design, and smooth CRUD operations with error handling.",
      duration: "2 months",
      role: "Full Stack Developer",
      teamSize: "1 person"
    },
    {
      id: 6,
      title: "Multi-Function Calculator (Advanced)",
      description: "A comprehensive calculator app with standard and scientific modes, memory functions, history tracking, and responsive design.",
      image: project6Image, // We'll use the icon instead
    //   icon: <CalculateIcon sx={{ fontSize: 100, color: 'primary.light' }} />, // For use in card/dialog
      technologies: ["React", "Material UI",  "localStorage API", "CSS Grid"],
      github: "https://github.com/Vamsi-allam/calculator/tree/main/react",
      goals: "To provide a modern, user-friendly calculator with advanced features for both standard and scientific calculations.",
      challenges: "Implementing scientific functions, memory/history management, and ensuring a responsive, accessible UI.",
      duration: "2 months",
      role: "Full Stack Developer",
      teamSize: "1 person"
    }
  ]

  return (
    <Box id="projects" component="section" sx={{py: 9 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          My Projects
        </Typography>
        
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ maxWidth: '400px' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(255, 77, 77, 0.2)'
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                  border: '1px solid rgba(60, 60, 60, 0.8)',
                  maxWidth: '360px',
                  mx: 'auto'
                }}
              >
                <CardActionArea onClick={() => handleClickOpen(project)}>
                  {project.image ? (
                    <CardMedia
                      component="img"
                      height="220"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  ) : (
                    <Box sx={{ 
                      height: '220px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderBottom: '1px solid rgba(60, 60, 60, 0.8)'
                    }}>
                      {project.icon}
                    </Box>
                  )}
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600, color: 'primary.light', fontSize: '1.1rem' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                    {project.description.substring(0, 80)}...
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255, 77, 77, 0.1)', 
                          color: 'primary.light',
                          fontWeight: 500,
                          height: '24px',
                          '& .MuiChip-label': {
                            fontSize: '0.8rem',
                            px: 1
                          }
                        }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip 
                        label={`+${project.technologies.length - 3}`} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.05)', 
                          color: 'text.secondary',
                          fontWeight: 500,
                          height: '22px',
                          '& .MuiChip-label': {
                            fontSize: '0.7rem',
                            px: 1
                          }
                        }}
                      />
                    )}
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleClickOpen(project)}
                    endIcon={<OpenInNewIcon sx={{ fontSize: '1rem' }} />}
                    fullWidth
                    size="medium"
                    sx={{
                      boxShadow: '0 4px 10px rgba(255, 77, 77, 0.3)',
                      py: 1,
                      fontSize: '0.9rem'
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <ProjectDetails 
        open={open} 
        handleClose={handleClose} 
        project={selectedProject} 
      />
    </Box>
  )
}

export default Projects