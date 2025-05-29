import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Paper, 
  Grid,
  Chip,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

function ProjectDetails({ open, handleClose, project }) {

  if (!project) return null;
  
  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          backgroundImage: 'linear-gradient(rgba(30, 30, 30, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, 0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          borderRadius: 2,
          border: '1px solid rgba(255, 77, 77, 0.2)'
        }
      }}
    >
      <DialogTitle sx={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
        py: 2, 
        px: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {project.title}
          </Typography>
          <IconButton onClick={handleClose} size="large" sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ py: 3, px: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', pt: 2, pb: 1, display: 'flex', justifyContent: 'center' }}>
              
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: 3 }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ maxWidth: '100%', maxHeight: 240, borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
              Project Overview
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
              {project.description}
            </Typography>
            
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium', mt: 4 }}>
              Project Goals
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
              {project.goals || "The main goals of this project were to create a responsive, user-friendly interface with modern design principles and optimal performance."}
            </Typography>
            
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium', mt: 4 }}>
              Challenges & Solutions
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              {project.challenges || "During development, we faced challenges with performance optimization and cross-browser compatibility. These were solved by implementing code splitting, lazy loading, and thorough browser testing."}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'rgba(30, 30, 30, 0.5)', borderRadius: 2 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.light', fontWeight: 'medium' }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {project.technologies.map((tech, index) => (
                  <Chip 
                    key={index} 
                    label={tech} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'rgba(255, 77, 77, 0.1)', 
                      color: 'primary.light',
                      fontWeight: 500,
                      mb: 1
                    }}
                  />
                ))}
              </Box>
              
              <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.light', fontWeight: 'medium', mt: 3 }}>
                Project Details
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" component="span" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                  Duration:
                </Typography>
                <Typography variant="body2" component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                  {project.duration || "3 months"}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" component="span" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                  Role:
                </Typography>
                <Typography variant="body2" component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                  {project.role || "Lead Developer"}
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" component="span" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                  Team Size:
                </Typography>
                <Typography variant="body2" component="span" sx={{ color: 'text.secondary', ml: 1 }}>
                  {project.teamSize || "3 people"}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'flex-end' }}>
          {project.github && (
            <Button 
              startIcon={<GitHubIcon />}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'white', 
                bgcolor: '#24292e',
                '&:hover': { 
                  bgcolor: '#1d2125',
                } 
              }}
            >
              View Code
            </Button>
          )}

        </Stack>
      </DialogActions>
    </Dialog>
  )
}

export default ProjectDetails