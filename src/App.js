import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DrawerAppBar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Hero';
import Program from './components/Program';
import HelpCenter from './components/HelpCenter';
import Cta from './components/Cta';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Box paddingBottom='70px'>
          <DrawerAppBar />
        </Box>
        <Box>
          <HeroSection />
        </Box>
        <Box>
          <Program></Program>
        </Box>
        <Box>
          <HelpCenter />
        </Box>
        <Box>
          <Cta />
        </Box>
        <Box>
          <Menu />
        </Box>
        <Box>
          <About />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
