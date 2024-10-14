// src/pages/Main.js
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import LogoSection from '../components/LogoSection';


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
