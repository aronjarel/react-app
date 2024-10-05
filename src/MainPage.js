// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to the LMS</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/teacher-assignment">Teacher Assignment</Link></li>
      </ul>
    </div>
  );
};

export default MainPage;
