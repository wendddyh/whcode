import { ListItemText, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'

const skills = [
  {
    type: "Languages",
    tools: ["Javascript", "Typescript", "HTML", "CSS/Sass", "Ruby", "C#"]
  },
  {
    type: "Frameworks",
    tools: ["React", "Rails"]
  },
  {
    type: "Tools",
    tools: ["Git & Github", "Bash", " Jira", "Visual Studi Code"]
  }
]

const Skills = () => {
  return (
    <Box>
      {skills.map(s =>
      <List>
        <Typography>
          {s.type}
        </Typography>
        <ListItemText>{s.tools}</ListItemText>
      </List>
      )}
    </Box>
  )
}

export default Skills
