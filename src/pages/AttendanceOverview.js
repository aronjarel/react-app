import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceOverview = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/attendance`);
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
    }
    setLoading(false);
  };

  const getAttendanceSummary = () => {
    const presentCount = attendanceRecords.filter((record) => record.Status === 'Present').length;
    const absentCount = attendanceRecords.filter((record) => record.Status === 'Absent').length;
    const tardyCount = attendanceRecords.filter((record) => record.Status === 'Tardy').length;

    return { presentCount, absentCount, tardyCount };
  };

  if (loading) {
    return <div>Loading attendance data...</div>;
  }

  const { presentCount, absentCount, tardyCount } = getAttendanceSummary();

  return (
    <div className="attendance-overview">
      <h3>Attendance Overview</h3>
      <div>
        <p>Total Records: {attendanceRecords.length}</p>
        <p>Present: {presentCount}</p>
        <p>Absent: {absentCount}</p>
        <p>Tardy: {tardyCount}</p>
      </div>
    </div>
  );
};

export default AttendanceOverview;
