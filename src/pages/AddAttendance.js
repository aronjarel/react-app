import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAttendance = () => {
  const [userId, setUserId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      await axios.post(`https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/attendance`, {
        userId,
        courseId,
        date,
        status,
        notes,
      });
      navigate('/attendance');
    } catch (error) {
      console.error('Error adding attendance record:', error);
    }
    setLoading(false); // Set loading to false after submission is complete
  };

  return (
    <div>
      <h2>Add Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </div>
        <div>
          <label>Course ID:</label>
          <input type="number" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </div>
        <div>
          <label>Notes:</label>
          <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button type="submit">{loading ? 'Submitting...' : 'Add Attendance'}</button>
      </form>
    </div>
  );
};

export default AddAttendance;
