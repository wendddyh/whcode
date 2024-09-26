import './App.css'
import { Container, createTheme, CssBaseline, Grid2, ThemeProvider} from '@mui/material'
import Header from './components/Header'
import Background from './components/Background'
import Projects from './components/Projects'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [ darkMode, setDarkMode ] = useState(true);

  const toggleDarkMode = ()=> {
    setDarkMode(!darkMode);
  }

  const theme =  createTheme({
    palette: {
      mode: darkMode ? 'dark':'light',
      primary: {
        main: darkMode ? '#18ffff' : '#5733FF'
      },
      background: {
        default: darkMode ? '#041124':'white'},
      text: {
        primary: darkMode ? '#ffffff' : '#000000',  // Text color
        secondary: darkMode ? '#ffffff' : '#333333',  // Secondary text
      },
    },
    typography: {
      fontFamily: `"Poppins", "DM Mono", sans-serif`,  // Custom fonts
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{
                  padding: { xs: '20px 5px', md: '35px 10px' },
                  maxWidth: { xs: '100%', md: '90%', lg: '1400px' },
                  margin:'auto',
          }}>
          <CustomCursor />
          <Grid2 size="auto" direction="column" alignItems="center" justifyContent="center"  >
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Header />
              <Background />
              <Projects />
              <Footer />
          </Grid2>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
