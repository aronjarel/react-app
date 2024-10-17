import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {GlobalStateContext} from '../components/GlobalStateProvider';

import Layout from '../components/Layout'

const CreateSchedule = () => {
  const {courses, loadCourses, loading} = useContext(GlobalStateContext);
  const [selectedClass, setSelectedClass] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const apiLink = `https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/schedules/`;



  useEffect(() => {
    loadCourses(); // Fetch courses when the component mounts
    console.log("loaded courses!");
  }, [loadCourses]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure time has seconds, convert 'HH:MM' to 'HH:MM:SS'
    const formattedStartTime = `${startTime}:00`; // Adds ':00' for seconds
    const formattedEndTime = `${endTime}:00`;

    try {
      const response = await axios.post(apiLink, {
        class_id: selectedClass,
        day_of_week: dayOfWeek,
        start_time: formattedStartTime,
        end_time: formattedEndTime,
      });
      setSuccess('Schedule created successfully!');
    } catch (error) {
      setError('Error creating schedule.');
    }
  };

  if (loading){
    return <p>Loading classes...</p>;
  }

  if (courses.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <Layout>
    <div>
      <h2>Create Class Schedule</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Select Class</option>
          {courses.map((c) => (
            <option key={c.Id} value={c.Id}>
              {c.Name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Day of the Week"
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
        />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button type="submit">Create Schedule</button>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
    </Layout>
  );
};

export default CreateSchedule;