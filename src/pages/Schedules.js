import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GlobalStateContext } from '../components/GlobalStateProvider';
import EditableTable from '../components/EditableTable';
import Layout from '../components/Layout'

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState('');

  const apiLink = `https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/schedules/`;


  // Fetch all schedules
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(apiLink);
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
      await axios.delete(`${apiLink}${id}`);
      setSchedules(schedules.filter(schedule => schedule.id !== id));  // Remove deleted schedule from state
    } catch (error) {
      setError('Error deleting schedule');
    }
  };

  const handleEdit = async (updatedSchedule) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(apiLink + updatedSchedule.Id, updatedSchedule, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      
      console.log('API call returned', response.data);
      const updatedSchedules = schedules.map((schedule) =>
        schedule.Id === updatedSchedule.Id ? updatedSchedule : schedule
      );
      console.log("updated schedule:", updatedSchedules);

      setSchedules(updatedSchedules);
      console.log('Schedule updated ', updatedSchedule);
      console.log('schedules', schedules);
    }catch(error){
      console.error('Error updating course:', error);
    }
  }

  return (
    <Layout>
    <div>
      <h2>Class Schedules</h2>
      {error && <p>{error}</p>}
      <EditableTable data={schedules} onEdit={handleEdit} onDelete={handleDelete} />  
    </div>
    </Layout>
  );
};

export default Schedules;
