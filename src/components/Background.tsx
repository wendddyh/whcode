import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: "Commonwealth Bank Australia",
    position: "Fullstack Developer Intern",
    date: "April 2024 - Dec 2024"
  },
  {
    company: "Commonwealth Bank Australia",
    position: "Fullstack Developer Intern",
    date: "April 2024 - Dec 2024"
  },
  {
    company: "Commonwealth Bank Australia",
    position: "Fullstack Developer Intern",
    date: "April 2024 - Dec 2024"
  },
  {
    company: "Commonwealth Bank Australia",
    position: "Fullstack Developer Intern",
    date: "April 2024 - Dec 2024"
  }
];

const Background = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Container sx={{ paddingTop: { xs: '6vh', md: '10vh', lg:'28vh'},
              maxWidth: '1400px',
              margin: 'auto'
              }}>
      <Grid container spacing ={2}>
        <Grid size={5}>
          <Box ref={ref}>
            <Box className={`fade-in ${inView ? 'fade-in-visible': ''}`}>
              <Box>
              <Typography sx={{fontFamily: `"poppins ", monospace`, fontWeight:400, fontSize:'1.5em', color:'inherit'}} >
                  experiences
              </Typography>
              {experiences.map(job=>
              <Box sx={{paddingTop:{ xs:'2vh'}}}>
                <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:500, fontSize:'20px', color:'inherit'}} >
                {job.position}
                </Typography>
                <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:400, fontSize:'18px', color:'inherit'}} >
                {job.company}
                </Typography>
                <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:300, fontSize:'0.8em', color:'inherit'}} >
                {job.date}
                </Typography>
              </Box>
              )}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={7}>
          <Box ref={ref} sx={{maxWidth: '1000px'}}>
            <Box className={`fade-in ${inView ? 'fade-in-visible': ''}`}>
              <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:500, fontSize:'1.5em', color:'#18ffff'}}>
                background
              </Typography>
              <Typography sx={{paddingTop:'4vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em', color:'whitesmoke'}}>
                Hi there, I'm Wendy and I enjoy creating and building stuff while seeing the impact of my work in real-time. I always accumulate skills and experience in the process of building and developing software applications. My first taste of coding went all the back at 2015 when I play around with HTML and CSS.
              </Typography>
              <Typography sx={{paddingTop:'4vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em', color:'whitesmoke'}}>
                I was previously work inconstruction industry and always intrested in automating manual process at the workforce.
              </Typography>
              <Typography sx={{paddingTop:'3vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em',  color:'whitesmoke'}}>
                Recently work as <strong>Software Engineer</strong> at Commonwealth Bank developing website application on system development lifecycle. During my work, I have demonstrated the ability to work independently and have strong teamwork ability and close cooperation with other team members. I participated in various stage of work from design, build, maintenance, testing and manual documenting with other developers. These experiences not only built my technical skills but also taught me how to work effectively in a team environment.
              </Typography>
              <Typography sx={{paddingTop:'3vh', fontFamily: `"Poppins", sans-serif`, fontWeight:200, fontSize:'1em',  color:'whitesmoke'}}>
                As a software developer, I enjoy combining my engineering skills with thoughtful design. My ultimate goal is to create products that provide real value and make a positive impact on users' lives.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Background
