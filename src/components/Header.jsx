import { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Add Skills to your navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    {name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        bgcolor: 'rgba(20, 20, 20, 0.95)', 
        height: '100%', 
        color: 'white',
        padding: '20px 0'
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Vamsi <Box component="span" sx={{ color: '#3b82f6' }}>Allam</Box>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                py: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 77, 77, 0.1)',
                  '& .MuiListItemText-primary': {
                    color: 'primary.main',
                    fontWeight: 'bold'
                  }
                }
              }} 
              href={item.href}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontSize: '1.1rem',
                  transition: 'color 0.3s ease, font-weight 0.3s ease'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ 
        background: 'linear-gradient(90deg, rgba(15, 17, 24, 0.95) 0%, rgba(23, 25, 35, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        py: 1.5,
        zIndex: 1100,
        width: '100%',
        borderBottom: '1px solid rgba(255, 77, 77, 0.1)'
      }}>
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, textAlign: { xs: 'left', sm: 'left' } }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ 
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                Vamsi <Box component="span" sx={{ color: '#3b82f6' }}>Allam</Box>
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      backgroundColor: 'background.paper'
                    }
                  }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name} 
                    color="inherit" 
                    href={item.href}
                    sx={{ 
                      textTransform: 'none',
                      fontSize: '1rem',
                      position: 'relative',
                      transition: 'color 0.3s ease',
                      padding: '6px 8px',
                      '&:hover': {
                        background: 'transparent',
                        color: '#3b82f6',
                        '&::after': {
                          width: '100%',
                          opacity: 1
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: '2px',
                        bgcolor: '#3b82f6', // Blue underline on hover
                        transition: 'width 0.3s ease, opacity 0.3s ease',
                        opacity: 0
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header
