// src/components/Main.js
import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import LogoSection from './LogoSection';


const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoSection />
    </div>
  );
};

export default Main;
