import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState('');

  // Fetch all schedules
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/schedules');
        setSchedules(response.data);
      } catch (error) {
        setError('Error fetching schedules');
      }
    };
    fetchSchedules();
  }, []);

  // Handle delete schedule
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedules/${id}`);
      setSchedules(schedules.filter(schedule => schedule.id !== id));  // Remove deleted schedule from state
    } catch (error) {
      setError('Error deleting schedule');
    }
  };

  return (
    <div>
      <h2>Class Schedules</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Room</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td>{schedule.class_name}</td>
              <td>{schedule.day_of_week}</td>
              <td>{schedule.start_time}</td>
              <td>{schedule.end_time}</td>
              <td>{schedule.room}</td>
              <td>
                <button onClick={() => handleDelete(schedule.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSchedules;
