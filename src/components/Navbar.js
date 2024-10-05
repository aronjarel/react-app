// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Training Logo" />
        <span>Training.org</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/deals">Deals</a></li>
        <li><a href="/award-bodies">Award Bodies</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <a href="/login" className="login-btn">Login</a>
        <a href="/signup" className="signup-btn">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
