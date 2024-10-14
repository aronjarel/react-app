// src/components/CreateCourse.js
import React, { useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

const CreateCourse = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const apiLink = `https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/courses/`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      await axios.post(apiLink, {
        name,
        description,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Course created successfully!');
      setName('');
      setDescription('');
    } catch (error) {
      setMessage('Error creating course');
    }
  };

  return (
    <Layout>
    <div>
      <h2>Create a New Course</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Create Course</button>
      </form>
    </div>
    </Layout>
  );
};

export default CreateCourse;
