import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAttendance = () => {
  const { id } = useParams();
  const [attendance, setAttendance] = useState({
    userId: '',
    courseId: '',
    date: '',
    status: '',
    notes: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/attendance?id=${id}`);
      setAttendance(response.data[0]);
    } catch (error) {
      console.error('Error fetching attendance record:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/attendance/${id}`, {
        status: attendance.status,
        notes: attendance.notes,
      });
      navigate('/attendance');
    } catch (error) {
      console.error('Error updating attendance record:', error);
    }
  };

  return (
    <div>
      <h2>Edit Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={attendance.status}
            onChange={(e) => setAttendance({ ...attendance, status: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Notes:</label>
          <input
            type="text"
            value={attendance.notes}
            onChange={(e) => setAttendance({ ...attendance, notes: e.target.value })}
          />
        </div>
        <button type="submit">Update Attendance</button>
      </form>
    </div>
  );
};

export default EditAttendance;
