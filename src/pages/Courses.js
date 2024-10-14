// src/components/CourseList.js
import React, { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../components/GlobalStateProvider';

import axios from 'axios';
import {  Link } from 'react-router-dom';
import EditableTable from '../components/EditableTable';


import Layout from '../components/Layout';

const Courses = () => {
  const { courses, setCourses, loadCourses, loading } = useContext(GlobalStateContext);

  const apiLink = `https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/courses/`;

  useEffect(() => {
    loadCourses(); // Fetch courses when the component mounts
    console.log("loaded courses!");
  }, [loadCourses]);

  const handleEdit = async (updatedCourse) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(apiLink + updatedCourse.Id, updatedCourse, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      
      console.log('API call returned', response.data);
      const updatedCourses = courses.map((course) =>
        course.Id === updatedCourse.Id ? updatedCourse : course
      );
      console.log("updated courses:", updatedCourses);

      setCourses(updatedCourses);
      console.log('Course updated ', updatedCourse);
      console.log('courses', courses);
    }catch(error){
      console.error('Error updating course:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.delete(apiLink + id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      console.log('Delete course returned', response.data);
      const updatedCourses = courses.filter((course) => course.Id !== id);
      setCourses(updatedCourses);
    }catch(error) {
      console.error('error deleting course:', error);
    }
  }

  if (loading.courses) {
    return <div>Loading courses...</div>;
  }

  if (courses.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <Layout>
    <div>
      <h2>Course List</h2>
      <Link to="/courses/add" className="button">Add Course</Link>
      <EditableTable data={courses} onEdit={handleEdit} onDelete={handleDelete} />    
    </div>
    </Layout>
  );
};

export default Courses;
