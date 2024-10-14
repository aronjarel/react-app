// src/components/Dashboard.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardContent from './DashboardContent';
import RightPanel from '../components/RightPanel';
import TopBar from '../components/TopBar';
import LeadStats from '../components/LeadStats';
import ProjectList from '../components/ProjectList';
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
