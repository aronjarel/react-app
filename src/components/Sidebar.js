// src/components/Sidebar.js
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Import the logo image

import './Sidebar.css';
import logout from '../pages/logout';

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-button" onClick={onToggle}> <i className="fas fa-bars"></i>
      </button>
      <div className="sidebar-header">
        <img src={logo} alt="Company Logo" className="sidebar-logo" />
      </div>
      <ul className="sidebar-menu">
        <li><NavLink to="/dashboard" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-tachometer-alt"></i> {!isCollapsed && 'Dashboard'}</NavLink></li>
        <li><NavLink to="/courses" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-book-reader"></i> {!isCollapsed && 'Courses'}</NavLink></li>
        <li><NavLink to="/attendance"className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-clipboard-list"></i> {!isCollapsed && 'Attendance'}</NavLink></li>
        <li><NavLink to="/app" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-th-large"></i> {!isCollapsed && 'App'}</NavLink></li>
        <li><NavLink to="/notifications" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-bell"></i> {!isCollapsed && 'Notifications'}</NavLink></li>
        <li><NavLink to="/tools" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-wrench"></i> {!isCollapsed && 'Tools'}</NavLink></li>
        <li><NavLink to="/chat" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-comments"></i> {!isCollapsed && 'Chat'}</NavLink></li>
        <li><NavLink to="/settings" className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-cog"></i> {!isCollapsed && 'Settings'}</NavLink></li>
        <li><NavLink onClick={logout} className={nav => (nav.isActive ? "active" : "")}><i className="fas fa-sign-out-alt"></i> {!isCollapsed && 'Sign out'}</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
