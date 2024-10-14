import { useNavigate } from 'react-router-dom';

const logout = () => {
  const navigate = useNavigate();

  // Clear authentication data (e.g., tokens or session information)
  localStorage.removeItem('authToken'); // Example: Remove token from localStorage
  sessionStorage.removeItem('userSession'); // Example: Remove session data

  // Optionally, clear any other user-related data here

  // Redirect to the login page
  navigate('/login');
};

export default logout;