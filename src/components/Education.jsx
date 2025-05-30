import { 
  Box, 
  Typography, 
  Container,
  Grid,
  Card,
  CardContent,
  Chip
} from '@mui/material'

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM University",
      location: "Mangalari, Andhara Pradesh, India",
      duration: "2021 - 2025",
      description: "Studied key computer science concepts including algorithms, data structures, and software engineering. Completed coursework in Full Stack development, databases, and Cyber Security.",
      skills: ["Java", "React", "Web Development", "MySql", "Git","Github","Spring Boot"],
      cgpa: "7.89/10.0"
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Sasi Junior College",
      location: "Rajamahendravaram, Andhara Pradesh, India",
      duration: "2018 - 2020",
      description: "Focused on Mathematics, Physics, and Chemistry. Developed a strong foundation in analytical thinking and problem-solving skills. Participated in coding competitions.",
      skills: ["C Fundamentals"],
      cgpa: "9.34/10.0"
    },
    {
      id: 3,
      degree: "Schooling",
      institution: "Sasi English Medium School",
      location: "Rajamahendravaram, Andhara Pradesh, India",
      duration: "2017-2018",
      description: "Completed secondary education with a focus on Science and Mathematics. Developed foundational skills in programming and logical reasoning.",
      // skills: ["Figma", "User Testing", "Wireframing", "Prototyping", "Design Systems"]
      cgpa: "9.8/10.0"
    }
  ];

  return (
    <Box id="education" component="section" sx={{ py: 10, backgroundColor: 'rgba(15, 17, 24, 0.7)' }}>
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
          Education
        </Typography>
        
        <Grid container spacing={4} direction="column">
          {education.map((item) => (
            <Grid item key={item.id}>
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
                      {item.degree}
                    </Typography>
                    <Chip 
                      label={item.duration} 
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
                    {item.institution}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.location}
                  </Typography>
                  
                  {item.cgpa && (
                    <Typography variant="body2" sx={{ 
                      mb: 1, 
                      color: 'primary.light', 
                      fontWeight: 500,
                      display: 'inline-block',
                      bgcolor: 'rgba(255, 77, 77, 0.08)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1
                    }}>
                      CGPA: {item.cgpa}
                    </Typography>
                  )}
                  
                  <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.skills && item.skills.map((skill, i) => (
                      <Chip 
                        key={i} 
                        label={skill}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(59, 130, 246, 0.1)',
                          color: '#3b82f6',
                          '&::before': { display: 'none' }
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
  );
}

export default Education