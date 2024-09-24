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
      background: { default: darkMode ? '#041124':'white'},
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{padding: '35px 10px', maxWidth: '1400px', margin:'auto'}}>
          <CustomCursor />
          <Grid2 direction="column" alignItems="center" justifyContent="center"  >
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
