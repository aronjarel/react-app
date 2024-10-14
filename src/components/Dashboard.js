// src/components/Dashboard.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Layout from './Layout';
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
  return (
    <Layout>
      <DashboardContent />
    </Layout>
  );
};

export default Dashboard;
