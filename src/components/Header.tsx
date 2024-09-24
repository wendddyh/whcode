import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react';

const Header = () => {
  const [ hoveredElement, setHoveredElement] = useState<string | null>(null);

  return (
    <Container sx={{padding: '10vh',paddingTop: '35vh', maxWidth: '1400px', margin:'auto'}}>
      <Box>
        <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontSize:'1.5em'}} >
          HI, I AM WENDY.
        </Typography>
        <Typography sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize:'3em'}}>
          Fullstack Developer based in {' '}
          <span className="outlined-text" onMouseEnter={() => setHoveredElement('Australia')} onMouseLeave={() => setHoveredElement(null)}>Australia</span>
        </Typography>
        <Typography sx={{paddingTop:'2vh', fontFamily: `"DM Mono", monospace`, fontSize:'1.5em'}}>
          From constructing building to {' '}
          <span onMouseEnter={() => setHoveredElement('crafting code.')} onMouseLeave={() => setHoveredElement(null)}>crafting code.</span>
        </Typography>
        <Typography sx={{paddingTop:'1vh', fontFamily: `"DM Mono", monospace` , fontSize:'1.5em'}}>
          A {' '} <span onMouseEnter={() => setHoveredElement('civil engineer')} onMouseLeave={() => setHoveredElement(null)}>civil engineer</span> turned software developer 👩‍💻, creating digital solutions with a builder's mindset.
        </Typography>
        {/* <Chip label='Currently building an application'></Chip> */}

        {hoveredElement === 'Australia' && (
          <Box className='kangaroo-burst-animation' sx={{ right: '25%', top: '45%' }}></Box>
        )}
        {hoveredElement === 'crafting code' && (
          <Box className='code-burst-animation'></Box>
        )}
        {hoveredElement === 'civil engineer' && (
          <Box className='excavator-animation'></Box>
        )}
      </Box>
    </Container>
  )
}

export default Header
