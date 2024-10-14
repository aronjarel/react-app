import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

// Create the context
export const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({ courses: false, users: false }); // Track loaded state

  const apiLink = "https://nodeapi-agf8g8e9gyd2b4g9.canadacentral-01.azurewebsites.net/api/courses";

  const loadCourses = useCallback(async () => {
    if (loaded.courses) return; // If already loaded, do not load again
    setLoading((prev) => ({ ...prev, courses: true }));

    try {
        const response = await fetch(apiLink);
        const data = await response.json();

        setCourses(data);
        setLoaded((prev) => ({ ...prev, courses: true }));
    } catch (error) {
      console.error('Error loading courses:', error);
    }
    setLoading((prev) => ({ ...prev, courses: false }));
  }, []); //no dependencies needed

  // Example function to load users (API call)
  const loadUsers = async () => {
    if (loaded.users) return; // If already loaded, do not load again
    setLoading((prev) => ({ ...prev, users: true }));
    try {
      // Simulate an API call
      const fetchedUsers = [
        { id: 1, name: 'Alice Johnson', role: 'Student' },
        { id: 2, name: 'Bob Smith', role: 'Teacher' },
        { id: 3, name: 'Charlie Brown', role: 'Student' },
      ];
      setUsers(fetchedUsers);
      setLoaded((prev) => ({ ...prev, users: true }));
    } catch (error) {
      console.error('Error loading users:', error);
    }
    setLoading((prev) => ({ ...prev, users: false }));
  };

  return (
    <GlobalStateContext.Provider
      value={{
        courses,
        setCourses,
        loadCourses,
        users,
        setUsers,
        loadUsers,
        loading,
        loaded,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
