// src/components/Dashboard.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
import RightPanel from './RightPanel';
import TopBar from './TopBar';
import LeadStats from './LeadStats';
import ProjectList from './ProjectList';
import AttendanceOverview from './AttendanceOverview'; // Import AttendanceOverview

import './Dashboard.css';


const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

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
      const  response = await axios.get(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/dashboard/${userRole}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to load dashboard data');
    }
  };

  return (
    <div className={`dashboard-layout ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleSidebarToggle}/>
      <div className="main-content">
        <Header />
        <DashboardContent />
        
        <LeadStats />
        <ProjectList />
      </div>
      <RightPanel />
    </div>
  );
};

export default Dashboard;
