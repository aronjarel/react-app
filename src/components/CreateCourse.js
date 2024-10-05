// src/components/CreateCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/courses', {
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
  );
};

export default CreateCourse;
