// src/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import CreateCourse from './components/CreateCourse';
import Courses from './components/Courses';
import AttendanceDashboard from './components/AttendanceDashboard';
import AddAttendance from './components/AddAttendance';
import EditAttendance from './components/EditAttendance';
import GlobalStateProvider from './components/GlobalStateProvider';

function App() {
  return (
    <GlobalStateProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } 
        />
        {/* Teacher-specific route to create courses */}
        <Route
          path="/create-course"
          element={
            <ProtectedRoute>
              <CreateCourse />
            </ProtectedRoute>
          }
        />
        {/* Public route for viewing courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendance" element={<AttendanceDashboard />} />
          <Route path="/attendance/add" element={<AddAttendance />} />
          <Route path="/attendance/edit/:id" element={<EditAttendance />} />
      </Routes>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;