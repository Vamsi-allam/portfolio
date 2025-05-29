import { 
  Box, 
  Typography, 
  Container, 
  Chip,
  Card,
  CardContent,
  Avatar
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
// Import icons from Material UI
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'

// For custom icons that need custom SVGs
const customIcons = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  materialui: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  restapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" // Using Node icon as a placeholder for RESTful APIs
}

function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py:10     }}>
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
          Skills
        </Typography>

        <Card sx={{ 
          background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
          border: '1px solid rgba(60, 60, 60, 0.8)',
          borderRadius: 2,
          maxWidth: 800,
          mx: 'auto',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
          overflow: 'visible',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
            background: 'linear-gradient(135deg, rgba(255, 77, 77, 0.2), transparent)',
            borderRadius: 3,
            filter: 'blur(10px)',
            zIndex: -1
          }
        }}>
          <CardContent sx={{ p: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <CodeIcon sx={{ color: 'primary.main', mr: 2, fontSize: '2.5rem' }} />
              <Typography variant="h4" component="h3" color="primary.main" fontWeight="600">
                Technical Skills
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 4
            }}>
              {/* First Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <SkillItem icon={customIcons.java} name="Java" level={80} />
                <SkillItem icon={customIcons.react} name="React" level={80} />
                <SkillItem icon={customIcons.spring} name="Spring Boot" level={80} />
                <SkillItem icon={customIcons.flutter} name="Flutter" level={40} />
                <SkillItem icon={customIcons.git} name="Git" level={88} />
                <SkillItem icon={customIcons.mysql} name="MySQL" level={80} />
              </Box>
              
              {/* Second Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <SkillItem icon={customIcons.azure} name="Azure IoT" level={80} />
                <SkillItem icon={customIcons.restapi} name="RESTful APIs" level={80} />
                <SkillItem icon={customIcons.javascript} name="JavaScript" level={60} />
                <SkillItem icon={customIcons.github} name="GitHub" level={85} />
                <SkillItem icon={customIcons.materialui} name="Material UI" level={85} />
                <SkillItem icon={customIcons.html5} name="HTML5/CSS3" level={80} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

// Custom skill item component with star rating
function SkillItem({ icon, name, level }) {
  // Convert percentage to 5-star rating
  const starRating = (level / 100) * 5;
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
        borderRadius: 2,
        bgcolor: 'rgba(30, 30, 30, 0.6)',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(70, 70, 70, 0.5)',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          bgcolor: 'rgba(40, 40, 40, 0.8)',
          borderColor: 'rgba(255, 77, 77, 0.3)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {typeof icon === 'string' ? (
          <Avatar 
            src={icon} 
            alt={name}
            sx={{ 
              width: 32, 
              height: 32,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              padding: '5px'
            }}
          />
        ) : (
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32, 
              bgcolor: 'rgba(255, 77, 77, 0.1)',
              color: 'primary.light' 
            }}
          >
            {icon}
          </Avatar>
        )}
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'white', 
            fontWeight: 500,
            flexGrow: 1
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {[...Array(5)].map((_, index) => {
            if (index < Math.floor(starRating)) {
              // Full star
              return <StarIcon key={index} sx={{ color: 'primary.main', fontSize: '1.2rem' }} />;
            } else if (index < Math.ceil(starRating) && !Number.isInteger(starRating)) {
              // Half star
              return <StarHalfIcon key={index} sx={{ color: 'primary.main', fontSize: '1.2rem' }} />;
            } else {
              // Empty star
              return <StarBorderIcon key={index} sx={{ color: 'primary.main', fontSize: '1.2rem' }} />;
            }
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Skills
