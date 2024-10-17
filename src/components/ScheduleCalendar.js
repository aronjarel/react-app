import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';  // FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid';  // For month view
import timeGridPlugin from '@fullcalendar/timegrid';  // For week view
import interactionPlugin from '@fullcalendar/interaction';  // For user interactions
import axios from 'axios';

import Layout from './Layout';

const ScheduleCalendar = () => {
  const [events, setEvents] = useState([]);

  const apiLink = `https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/schedules/`;


  // Fetch schedules from the backend and convert them to calendar events
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(apiLink);  // Assuming this API returns all schedules
        const schedules = response.data;

        // Map schedules to FullCalendar event format
        const calendarEvents = schedules.map(schedule => ({
          id: schedule.id,
          title: schedule.Name,
          start: `${schedule.day_of_week}T${schedule.start_time}`,  // Assuming backend returns day and time separately
          end: `${schedule.day_of_week}T${schedule.end_time}`,
        }));

        setEvents(calendarEvents);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <Layout>
    <div>
      <h2>Class Schedule Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"  // Default to week view
        events={events}  // Pass the events to the calendar
        editable={false}  // Disable dragging for now (can be customized)
        selectable={true}  // Allow selecting a time range (if needed)
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
    </Layout>
  );
};

export default ScheduleCalendar;
