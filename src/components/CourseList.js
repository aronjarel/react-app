// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.Id}>
            <h3>{course.Name}</h3>
            <p>{course.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
