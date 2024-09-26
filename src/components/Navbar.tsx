import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material'
// import IconButton from '@mui/material/IconButton';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import resume from '../assets/resume.pdf';

interface NavbarThemeSwitchProps{
  darkMode: boolean,
  toggleDarkMode: () => void,
}

const Navbar = ({darkMode, toggleDarkMode}: NavbarThemeSwitchProps) => {

  return (
        <AppBar position="static" elevation={0} color='transparent'>
          <Container maxWidth='lg' sx={{display:'flex', margin:'auto'}}>
            <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1, fontFamily: `"Poppins", sans-serif`, fontWeight:500, fontSize:'2vw'}}>WHCODES</Typography></Toolbar>
            <Box sx={{  display:'flex',gap:4, alignItems:'center', marginLeft:'auto' }}>
              <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:400, fontSize:'1vw', cursor:'pointer'}}><Link href={resume} target="_blank" sx={{border: '1px solid #83B4B7', borderRadius:'10%', padding:'10px', textDecoration:'none',  '&:hover':{color: '#18ffff', border: '1px solid #18ffff'}}}>RESUME</Link></Typography>
              {/* <IconButton onClick={toggleDarkMode} color="inherit" >
                {darkMode ? <LightModeIcon sx={{fontSize:'1.2em'}}/> :<DarkModeIcon sx={{fontSize:'1.2em'}} />   }
              </IconButton> */}
            </Box>
          </Container>
        </AppBar>

  )
}

export default Navbar
