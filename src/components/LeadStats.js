// src/components/LeadStats.js
import React from 'react';
import './LeadStats.css';

const LeadStats = () => {
  return (
    <div className="lead-stats-container">
      <div className="lead-performance">
        <h3>Lead Performance</h3>
        <div className="chart">
          {/* Placeholder for chart - replace with a library like Chart.js */}
          <svg width="300" height="150">
            <polyline
              fill="none"
              stroke="#0074d9"
              strokeWidth="3"
              points="0,100 50,60 100,80 150,40 200,60 250,20"
            />
          </svg>
        </div>
        <div className="time-filters">
          <button>1 week</button>
          <button>1 month</button>
          <button>2 months</button>
          <button className="active">6 months</button>
        </div>
      </div>
      <div className="total-leads">
        <h3>Total Leads</h3>
        <div className="lead-chart">
          {/* Placeholder for Pie chart */}
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" fill="#0074D9" />
            <circle cx="50" cy="50" r="30" fill="#2ECC40" />
            <circle cx="50" cy="50" r="20" fill="#FF4136" />
          </svg>
        </div>
        <div className="lead-stats">
          <p>Organic Leads: 342</p>
          <p>Purchased Leads: 150</p>
          <p>Blocked Leads: 130</p>
        </div>
      </div>
    </div>
  );
};

export default LeadStats;
