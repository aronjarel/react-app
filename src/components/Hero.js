// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Innovative Learning <br /> For a <span>Successful Career</span></h1>
        <div className="search-bar">
          <input type="text" placeholder="Find Your Perfect Course..." />
          <button>Send</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/path/to/hero-image.png" alt="Student" />
      </div>
    </section>
  );
};

export default Hero;
