// src/components/TopBar.js
import React from 'react';
import './TopBar.css';

const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
};


const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-info">
        <div className="project-details">
          <p>PROJECT NAME</p>
          <p>LOCALITY</p>
          <p>LEAD RECEIVED</p>
        </div>
        <div className="project-summary">
          <p>Maude Fitzgerald</p>
          <p>Koss Roads Suite 908</p>
          <p>622</p>
        </div>
      </div>
      <div className="topbar-right">
      <a onClick={handleLogout} href="" className="add-project-btn">Logout</a>
        <a href="/add-project" className="add-project-btn">Add Project</a>
        <div className="profile-section">
          <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
          <span>Hi, Harsh</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
