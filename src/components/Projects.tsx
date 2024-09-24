import { Box,Chip, Container, Grid2, IconButton, Paper, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    name: "Typing Ninja",
    description: "Typing Test is a simple and interactive application designed to help you improve your typing speed and accuracy. Challenge yourself with various typing exercises, track your progress.",
    tools: ["React"],
    link: "",
    backgroundColor: 'linear-gradient(45deg, #595CFF, #6971EA, #7986D6, #8A9BC1, #9AB0AC, #AAC598, #BADA83)',
    backgroundColorHover: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  },
  {
    name: "Netflix Clone",
    description: "Netflix Clone is a fully functional replica of the popular streaming service, allowing users to browse, search, and stream their favorite movies and TV shows.",
    tools: ["React"],
    link: "",
    backgroundColor: 'linear-gradient(45deg, #FF59EC, #F968DA, #F278C9, #EC87B7, #E696A5, #DFA694, #D9B582)',
    backgroundColorHover: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  },
  {
    name: "Game Hub",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React", "Rawg API"],
    link: "https://github.com/wendddyh/game-hub",
    backgroundColor: 'linear-gradient(45deg, #595CFF, #6971EA, #7986D6, #8A9BC1, #9AB0AC, #AAC598, #BADA83)',
    backgroundColorHover: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  },
  {
    name: "Plan Link",
    description: "Plan Link is a tools to rent venue and create event in one app",
    tools: ["Ruby on Rails", "Javascript"],
    link: "https://github.com/wendddyh/planlink",
    backgroundColor: 'linear-gradient(45deg, #595CFF, #6971EA, #7986D6, #8A9BC1, #9AB0AC, #AAC598, #BADA83)',
    backgroundColorHover: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  },
];

const Projects = () => {
  return (
    <Container sx={{padding: '10vh 10vh', maxWidth: '1400px', margin:'auto'}}>
      <Typography sx={{fontFamily: `"DM Mono", monospace`, fontWeight:500, fontSize:'1.5em', color:'#18ffff'}}>
        Projects
      </Typography>

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingTop:'5vh'}}>
        {projects.map((project, index) => (
          <Paper key={index} className="projectCard" elevation={3} variant="elevation" sx={{overflow:'hidden',border:'2px solid #18ffff', maxWidth:'500px', maxHeight:'250px',padding:"30px", background:'transparent', cursor: 'pointer', transform: 'translateY(0)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
              '.projectName, & .projectDescription': {
                color: '#5EE7EE',
              },
            }}}>
              
            <Box sx={{display:'flex'}}>
              <Typography className="projectName" sx={{flexGrow: 1, color:'white', fontFamily: `"Poppins", sans-serif`, fontWeight:600, fontSize:'1.5em'}}>
                {project.name}
              </Typography>
              <IconButton href={project.link} target="_blank" sx={{color: 'inherit'}}>
                <GitHubIcon sx={{fontSize:'1.2em', '&:hover':{color: '#18ffff'}}} />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ marginTop:'1vh', color: '#ccd6f6', marginBottom: 2 , fontFamily: `"DM Mono", monospace`}}>
              {project.description}
            </Typography>
            {project.tools.map((tool, index) =>
            <Chip key={index} variant="outlined" sx={{borderColor:'transparent',margin:'5px',spacing:'1vh', background:'#1C545F', fontFamily: `"Poppins", sans-serif`, transition:'background 1 ease', '&:hover':{borderColor: '#18ffff'}, fontWeight:500 }} label={tool}></Chip>)}

          </Paper>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects
