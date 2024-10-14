import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {GlobalStateContext} from '../components/GlobalStateProvider';

const CreateSchedule = () => {
  const [classes, loading] = useContext(GlobalStateContext);
  const [selectedClass, setSelectedClass] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiLink, {
        class_id: selectedClass,
        day_of_week: dayOfWeek,
        start_time: startTime,
        end_time: endTime,
      });
      setSuccess('Schedule created successfully!');
    } catch (error) {
      setError('Error creating schedule.');
    }
  };

  if (loading){
    return (<p>Loading classes...</p>);
  }

  return (
    <div>
      <h2>Create Class Schedule</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Select Class</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.class_name}
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
  );
};

export default CreateSchedule;