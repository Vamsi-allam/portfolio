import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

function Experience() {
  const experiences = [
    {
      id: 1,
      position: "IOT Java Product Engineer Intern",
      company: "Cognizant Technology Solutions",
      location: "Pune, Maharashtra, India",
      duration: "Jan 2025 - May 2025",
      description: `Gained hands-on experience in IoT product engineering, Product Lifecycle Management (PLM), and fullstack development. Learned to build scalable web applications and understood how IoT systems interact with software platforms. Worked on real-world client scenarios, developed APIs, managed databases, and built user interfaces using modern web technologies, while collaborating in Agile teams. As part of a group of five, my primary role was backend development using Spring framework, focusing on building robust APIs and ensuring seamless integration with IoT systems.`,
      icon: <CodeIcon />,
      skills: ["Spring", "Java", "APIs","React", "MySQL", "Azure Iot"]
    },
    {
      id: 2,
      position: "Data Analyst Intern",
      company: "APSSDC",
      location: "Virtual",
      duration: "May 2023 - July 2023",
      description: `Developed a comprehensive Google Search Trend Analysis tool using Python, Pandas, and the PyTrends API. Implemented regional and time-based interest analysis, multi-keyword comparison, and data visualizations with Matplotlib. Automated data processing, error handling, and API rate limit management for robust, insightful reporting.`,
      icon: <DesignServicesIcon />,
      skills: ["Python", "Pandas", "PyTrends", "Matplotlib", "Data Analysis", "Visualization", "API Handling"]
    }
  ]

  return (
    <Box id="experience" component="section" sx={{ py: 9, backgroundColor: 'rgba(15, 17, 24, 0.7)' }}>
      <Container>
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          gutterBottom
          sx={{ 
            mb: 6,
            color: 'white', 
            position: 'relative',
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
          Professional Experience
        </Typography>
        
        <Grid container spacing={4} direction="column">
          {experiences.map((job) => (
            <Grid item key={job.id}>
              <Card sx={{ 
                position: 'relative',
                overflow: 'visible',
                backgroundColor: 'rgba(23, 25, 35, 0.8)',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateX(8px)',
                  boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: -20,
                  top: 20,
                  width: 35,
                  height: 35,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1,
                  boxShadow: '0 0 15px rgba(255, 77, 77, 0.5)'
                }
              }}>
                <CardContent>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    mb: 1
                  }}>
                    <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 600 }}>
                      {job.position}
                    </Typography>
                    <Chip 
                      label={job.duration} 
                      size="small" 
                      sx={{ 
                        bgcolor: 'rgba(255, 77, 77, 0.1)', 
                        color: 'primary.light',
                        fontWeight: 500
                      }} 
                    />
                  </Box>
                  
                  <Typography variant="h6" component="span" sx={{ 
                    color: 'primary.main', 
                    fontWeight: 'medium', 
                    display: 'block',
                    mb: 0.5
                  }}>
                    {job.company}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {job.location}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
                    {job.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {job.skills.map((skill, i) => (
                      <Chip 
                        key={i} 
                        label={skill}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255, 77, 77, 0.08)', 
                          color: 'primary.light' 
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Experience