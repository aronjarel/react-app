// src/components/Dashboard.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import TopBar from './TopBar';
import LeadStats from './LeadStats';
import ProjectList from './ProjectList';
import './Dashboard.css';


const Dashboard = () => {

  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    //decode JWT
    const userRole = JSON.parse(atob(token.split('.')[1])).role;
    setRole(userRole);

    if (userRole === 'admin'){
      fetchDashboardData('admin');
    }else if (userRole === 'teacher') {
      fetchDashboardData('teacher');
    } else if (userRole === 'student') {
      fetchDashboardData('student');
    }
  }, []);

  const fetchDashboardData = async (userRole) => {
    try {
      const  response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard/${userRole}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to load dashboard data');
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div>
      <h2>Dashboard</h2>
      {/* Conditional display based on role */}
      {role === 'teacher' && (
        <div>
          <h3>Teacher Dashboard</h3>
          <Link to="/create-course">Create a New Course</Link>
        </div>
      )}
      {role === 'student' && (
        <div>
          <h3>Student Dashboard</h3>
          <Link to="/courses">View Available Courses</Link>
        </div>
      )}
      {role === 'admin' && (
        <div>
          <h3>Admin Dashboard</h3>
          <p>Admin-specific actions go here</p>
        </div>
      )}
    </div>
        <LeadStats />
        <ProjectList />
      </div>
    </div>
  );
};

export default Dashboard;
