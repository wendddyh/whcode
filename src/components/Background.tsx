import { Box, Container, Typography } from "@mui/material";

const Background = () => {
  return (
    <Container sx={{ paddingTop: { xs: '6vh', md: '10vh', lg:'28vh'},
              maxWidth: '1400px',
              margin: 'auto'
              }}>
      <Box sx={{maxWidth: '1000px'}}>
        <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:500, fontSize:'1.5em', color:'#18ffff'}}>
          Background
        </Typography>
        <Typography sx={{paddingTop:'4vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em'}}>
          Hello, my name is Wendy Henry and I enjoy creating and building stuff while seeing the impact of my work in real-time. My interest in web development began back in 2015 when I was exploring Chrome Dev Tool and found the excitement in tweaking colors on random websites. I start learning about HTML and CSS and slowly realize that this was more than just a passing interest.
        </Typography>
        <Typography sx={{paddingTop:'3vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em'}}>
          I'm currently training as <strong>Junior Software Developer</strong> at Commonwealth Bank, building an applications with an amazing teams. I recently completed 6 months bootcamp learning the fundamentals of front-end and back-end development, through pair programming, problem-solving, and collaborative projects. These experiences not only built my technical skills but also taught me how to work effectively in a team environment.
        </Typography>
        <Typography sx={{paddingTop:'3vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em'}}>
          As a software developer, I enjoy combining my engineering skills with thoughtful design. My ultimate goal is to create products that provide real value and make a positive impact on users' lives.
        </Typography>
      </Box>
    </Container>
  )
}

export default Background
