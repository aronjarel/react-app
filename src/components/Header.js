import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const dismissMessage = () => {
    setIsVisible(false); // Hide the message when the button is clicked
  };

  return (
    <div className="header">
      {isVisible && (
        <div className="welcome-message">
          <button className="dismiss-button" onClick={dismissMessage}>×</button> {/* Dismiss button */}
          <h2>Welcome back! Diane</h2>
          <p>You have completed 60% of your goal this week! Start a new goal and improve your results.</p>
        </div>
      )}
      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Header;
