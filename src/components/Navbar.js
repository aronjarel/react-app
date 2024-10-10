// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = ({role}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Training Logo" />
        <Link to="/">LMS</Link>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>

        {role === undefined || role === null && (
          <>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact</a></li>
          
          </>
        )}

        {role === 'teacher' && (
          <>
            <li>
          <NavLink to="/attendance" activeClassName="active-link">
            Attendance
          </NavLink>
        </li>
            <li>
              <NavLink to="/create-course" activeClassName="active-link">
                Create Course
              </NavLink>
            </li>
          </>
        )}

        {role === 'admin' && (
          <>
            <li>
              <NavLink to="/admin/users" activeClassName="active-link">
                Manage Users
              </NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/login" activeClassName="active-link">
            Logout
          </NavLink>
        </li>

      </ul>
      {role === undefined && (
        <>
        <div className="auth-buttons">
        <a href="/login" className="login-btn">Login</a>
        <a href="/signup" className="signup-btn">Signup</a>
        </div>
        </>
      )}
      
    </nav>
  );
};

export default Navbar;
