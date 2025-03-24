import { Box, Container, Grid2, Link, Typography } from '@mui/material'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailIcon from '@mui/icons-material/Mail';

const info =[
  {
    name:'Email',
    info: "wenddyhenry@gmail.com",
    link: 'mailto:wenddyhenry@gmail.com'
  },
  {
    name:'GitHub',
    info: "@whcodes",
    link: "https://github.com/wendddyh"
  },
  {
    name:'Threads',
    info: "@wendyH",
    link: 'https://www.threads.net/@wenddyhenry'
  },
  {
    name:'Linkedin',
    info: "in/wenddyhenry",
    link: "https://www.linkedin.com/in/wenddyhenry/"
  },

]

const Footer = () => {
  return (
    <>
    <Container sx={{ paddingTop: { xs: '6vh', md: '10vh', lg:'10vh'},
                maxWidth: 'auto',
                margin: 'auto'
              }}>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'35vh',   }}>
          <Typography  sx={{fontFamily: `"Poppins", sans-serif`, fontWeight:600, color:'white', fontSize:{xs: '2vw', md: '1.5vw', lg:'1vw'}}}>
                If you'd like to get in touch, please reach out.
          </Typography>
        <Grid2 container spacing={{ xs: 8, md: 8 }} columns={{ xs: 12, sm: 12, md: 12 }} sx={{paddingTop:'5vh'}}>
          {info.map((detail) =>
            <Box>
              <Typography className="detail" sx={{color:"white", fontFamily: `"Poppins", sans-serif`, fontWeight:400, fontSize:{xs: '2vw', md: '1.5vw', lg:'1vw'}}}>
                {detail.name}
              </Typography>
              <Typography className="detail" sx={{color:"white", fontFamily: `"Poppins", sans-serif`, fontWeight:400, fontSize:{xs: '2vw', md: '1.5vw', lg:'1vw'}}}>
                <Link href={detail.link}>{detail.info}</Link>
              </Typography>
            </Box>
          )}
        </Grid2>
        <Box sx={{display:'flex', alignItems:'center', marginTop:'auto'}}>
          <Typography sx={{flexGrow: 1, fontSize:'0.8rem', color:'white'}}>
          Copyright © 2025 -Designed and build by Wendy
          </Typography>

        </Box>
      </Box>
    </Container>
    </>

  )
}

export default Footer
