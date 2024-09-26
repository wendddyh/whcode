import { Box, Container, IconButton, Link, Typography } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <>
    <Container sx={{ paddingTop: { xs: '6vh', md: '10vh', lg:'25vh'},
                maxWidth: '1400px',
                margin: 'auto'
              }}>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'35vh',   }}>
        <Box>
          <Typography  sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:500, fontSize:{xs: '4vw', md: '2vw', lg:'2vw'}}}>
            Hey there, I'm always up for a chat.
          </Typography>
          <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:300, fontSize:{xs: '4vw', md: '2vw', lg:'2vw'}}}>
            Pop me an email at <Link href="mailto:wenddyhenry@gmail.com" sx={{color:'white', textDecoration:'none','&:hover':{color: '#18ffff'}}}>wenddyhenry@gmail.com</Link>
          </Typography>
        </Box>
        <Box>

        </Box>
        <Box sx={{display:'flex', alignItems:'center', marginTop:'auto'}}>
          <Typography sx={{flexGrow: 1, fontSize:'1.2rem'}}>
            Designed and build with <ConstructionIcon sx={{fontSize:{xs: '3vw', md: '2vw', lg:'1vw'}, color:'pink', marginLeft:'3px', marginRight:'3px'}}/> and <FavoriteIcon sx={{fontSize:'1.2rem', color:'pink',  marginLeft:'3px', marginRight:'3px'}}/> by Wendy
          </Typography>
          <IconButton href="https://github.com/wendddyh">
          <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize:{xs: '2vw', md: '2vw', lg:'1vw'}, '&:hover':{color: '#18ffff'}}}>GITHUB</Typography>
            {/* <GitHubIcon sx={{fontSize:'1.5rem', color:'pink',  '&:hover':{color: '#18ffff'}}}/> */}
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/wenddyhenry/">
            <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize:{xs: '2vw', md: '2vw', lg:'1vw'}, '&:hover':{color: '#18ffff'}}}>LINKEDIN</Typography>
            {/* <LinkedInIcon sx={{fontSize:'1.5rem', color:'pink',  '&:hover':{color: '#18ffff'}}}/> */}
          </IconButton>
          <IconButton href="mailto:wenddyhenry@gmail.com">
            <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize:{xs: '2vw', md: '1vw', lg:'1vw'}, '&:hover':{color: '#18ffff'}}}>EMAIL</Typography>
            {/* <MailIcon sx={{fontSize:'1.5rem', color:'pink',  '&:hover':{color: '#18ffff'}}}/> */}
          </IconButton>
        </Box>
      </Box>
    </Container>
    </>

  )
}

export default Footer
