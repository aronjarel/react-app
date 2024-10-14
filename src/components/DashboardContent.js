import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import './DashboardContent.css';
import AttendanceOverview from './AttendanceOverview'; // Reuse existing component

const DashboardContent = () => {
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
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to load dashboard data');
    }
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-section results">
        <h3>Results</h3>
        {/* Add results content here */}
      </div>
      <div className="dashboard-section attendance">
        <AttendanceOverview />
      </div>
      <div className="dashboard-section courses">
        <h3>Course Overview</h3>
        {/* Add courses content here */}
      </div>
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
  );
};

export default DashboardContent;
