import * as React from 'react';
import HeroSection from './components/HeroSection/Hero';
import Program from './components/Program';
import HelpCenter from './components/HelpCenter';
import Cta from './components/Cta';
import Menu from './components/Menu.js';
import About from './components/About';
import Footer from './components/Footer';
import Ad from './components/Ads.js';

function App() {
  return (
    <>
      <HeroSection />
      <Ad></Ad>
      <Program></Program>
      <HelpCenter />
      <Cta />
      <Menu />
      <About />
      <Footer />
    </>
  );
}

export default App;
