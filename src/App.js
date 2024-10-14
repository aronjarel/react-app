// src/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import CreateCourse from './pages/CreateCourse';
import Courses from './pages/Courses';
import AttendanceDashboard from './pages/AttendanceDashboard';
import AddAttendance from './pages/AddAttendance';
import EditAttendance from './pages/EditAttendance';
import GlobalStateProvider from './components/GlobalStateProvider';
import Unauthorized from './pages/Unauthorized';
import CreateSchedule from './pages/CreateSchedule';
import ViewSchedules from './pages/ViewSchedules';

function App() {
  return (
    <GlobalStateProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['Admin', 'Teacher']}>
            <Dashboard />
          </ProtectedRoute>
          } 
        />
        {/* Teacher-specific route to create courses */}
        <Route
          path="/create-course"
          element={
            <ProtectedRoute allowedRoles={['Teacher']}>
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
        <Route path="/create-schedule" element={<CreateSchedule />} />
        <Route path="/view-schedules" element={<ViewSchedules />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;