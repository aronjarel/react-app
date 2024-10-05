// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import LeadStats from './LeadStats';
import ProjectList from './ProjectList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <LeadStats />
        <ProjectList />
      </div>
    </div>
  );
};

export default Dashboard;
