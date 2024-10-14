import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const AttendanceDashboard = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await axios.get(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/attendance`);
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
    }
    setLoading(false); // Set loading to false after fetching data
  };

  if (loading) {
    return <div>Loading attendance records...</div>; // Display loading message while loading
  }

  return (
    <Layout>
    <div>
      <h2>Attendance Dashboard</h2>
      <Link to="/attendance/add">Add Attendance</Link>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Course ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.Id}>
              <td>{record.UserId}</td>
              <td>{record.CourseId}</td>
              <td>{record.Date}</td>
              <td>{record.Status}</td>
              <td>{record.Notes}</td>
              <td>
                <Link to={`/attendance/edit/${record.Id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default AttendanceDashboard;
