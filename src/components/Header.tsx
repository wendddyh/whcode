import { Box, Button, Container, Fade, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [ hoveredElement, setHoveredElement] = useState<string | null>(null);

  return (
    <Container sx={{ paddingTop: { xs: '6vh', md: '8vh', lg:'25vh'},
                maxWidth: '1400px',
                margin: 'auto'
              }}>

        <Box ref ={ref} sx={{display: 'flex'}}>
          <Fade in={inView} timeout={1000}>
            <Box sx={{flexGrow:1}}>
              <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:200, fontSize:'1em', color:'#18ffff'}}>
                  Wendy Henry
              </Typography>
              <Typography sx={{fontFamily: `"DM Mono", monospace`, fontStyle:'italic', fontWeight:200, fontSize:'1em', color:'#18ffff'}}>
                  Software Developer
              </Typography>
            </Box>
          </Fade>
        </Box>

        <Box ref ={ref}>
          <Box className={`fade-in ${inView ? 'fade-in-visible': ''}`}>
            <Box sx={{paddingTop: '2vh'}}>
              <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize: {xs: '4vw', md: '2vw', color:'white'} }} >
                Hello 👋🏼 I'm Wendy,
              </Typography>
              <Typography sx={{paddingTop:'2vh', fontFamily: `"DM Mono", monospace`, fontSize:{xs: '4vw', md: '2vw'},  color:'white'}}>
                Software developer from Malaysia based in {' '}
                <span className="outlined-text" onMouseEnter={() => setHoveredElement('Spain')} onMouseLeave={() => setHoveredElement(null)}>Spain</span>
              </Typography>
              <Typography sx={{paddingTop:'1vh', fontFamily: `"DM Mono", monospace` , fontSize:{xs: '4vw', md: '1.5vw'},  color:'white'}}>I'm passionate on creating digital solutions with a builder's mindset.</Typography>
              <Typography sx={{paddingTop:'1vh', fontFamily: `"DM Mono", monospace` , fontSize:{xs: '4vw', md: '1.5vw'},  color:'white'}}>
                From constructing <mark>building</mark> to crafting code 👩‍💻
              </Typography>
              <Button  variant="contained" sx={{marginTop:'3vh'}}>
                <Link sx={{color: 'inherit', textDecoration:'none'}}>View Profile</Link><KeyboardDoubleArrowRightIcon sx={{paddingLeft:'1vh'}}></KeyboardDoubleArrowRightIcon>
              </Button>

              {hoveredElement === 'Spain' && (
                <Box className='kangaroo-burst-animation'></Box>
              )}
            </Box>
          </Box>
        </Box>


    </Container>
  )
}

export default Header
