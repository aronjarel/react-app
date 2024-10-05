// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/path/to/logo.png" alt="Company Logo" className="sidebar-logo" />
        <h2>Harsh Enterprises</h2>
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/leads">My Leads</Link></li>
          <li><Link to="/purchase-leads">Purchase Leads</Link></li>
          <li><Link to="/packages">Packages</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
