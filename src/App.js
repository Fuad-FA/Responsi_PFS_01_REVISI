
import React from 'react';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
