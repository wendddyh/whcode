import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PushPinIcon from '@mui/icons-material/PushPin';

interface NavbarThemeSwitchProps{
  darkMode: boolean,
  toggleDarkMode: () => void,
}

const Navbar = ({ darkMode, toggleDarkMode }:NavbarThemeSwitchProps ) => {

  return (
        <AppBar position="static" elevation={0} color='transparent'>
          <Container maxWidth='lg' sx={{display:'flex', margin:'auto'}}>
              <Toolbar disableGutters>
              <Typography sx={{ flexGrow: 1, fontFamily: `"Poppins", sans-serif`, fontWeight:500, fontSize:{xs: '2vw', md: '2vw', lg:'2vw'},  color:'white'}}>WHCODES</Typography></Toolbar>
            <Box sx={{  display:'flex',gap:4, alignItems:'center', marginLeft:'auto' }}>
              <IconButton>
                <PushPinIcon sx={{fontSize:'1vw'}}></PushPinIcon>
                <Typography sx={{fontSize:'1vw'}}>UTC+1:00</Typography>
              </IconButton>
              <Typography sx={{color:"#18ffff", fontFamily: `"Poppins", sans-serif`, fontWeight:300, fontSize:{xs: '1vw', md: '1vw', lg:'1vw'}, cursor:'pointer'}}><Link href='https://www.linkedin.com/in/wenddyhenry/' target="_blank" sx={{color: '#18ffff', textDecoration:'none',  '&:hover':{color: '#18ffff'}}}>linkedin</Link></Typography>
              <Typography sx={{color:"#18ffff", fontFamily: `"Poppins", sans-serif`, fontWeight:300, fontSize:{xs: '1vw', md: '1vw', lg:'1vw'}, cursor:'pointer'}}><Link href='https://github.com/wendddyh' target="_blank" sx={{color: '#18ffff', textDecoration:'none',  '&:hover':{color: '#18ffff'}}}>github</Link></Typography>
              <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <LightModeIcon sx={{fontSize:'1.2em'}} /> :<DarkModeIcon sx={{fontSize:'1.2em'}} />   }
              </IconButton>
            </Box>
          </Container>
        </AppBar>

  )
}

export default Navbar
