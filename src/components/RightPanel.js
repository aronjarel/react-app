import React from 'react';
import './RightPanel.css';

const RightPanel = () => {
  const challenges = [
    {
      icon: 'fas fa-paint-brush', // Example icon class for design-related tasks
      text: 'Create a simple website design',
      date: '10 Oct 2019',
    },
    {
      icon: 'fas fa-list', // Example icon class for TODO apps
      text: 'Simple TODO app',
      date: '12 Oct 2019',
    },
    {
      icon: 'fas fa-print', // Example icon class for printing tasks
      text: 'Great School management printing',
      date: '18 Oct 2019',
    },
    {
      icon: 'fas fa-paint-brush', // Example icon class for website creation
      text: 'Create a simple website',
      date: '20 Oct 2019',
    },
  ];

  return (
    <div className="right-panel">
      <div className="user-info">
        <i className="fas fa-user"></i>
        <h6 className="user-name">Patrick Cruz</h6>
        <p className="user-role">Student</p>
        <hr className="divider" />
      </div>
      <div className="upcoming-challenges">
        <h4>Upcoming Challenges</h4>
        <ul>
          {challenges.map((challenge, index) => (
            <li key={index} className="challenge-item">
              <i className={challenge.icon}></i>
              <div className="challenge-details">
                <span className="challenge-text">{challenge.text}</span>
                <span className="challenge-date">{challenge.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="account-balance">
        <h3>Account Balance</h3>
        <p>$78,245.00</p>
      </div>
      <div className="achievements">
        <h3>Achievements</h3>
        <div className="achievement-icon">🏆</div>
      </div>
    </div>
  );
};

export default RightPanel;
