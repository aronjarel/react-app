// src/components/ProjectList.js
import React from 'react';
import './ProjectList.css';

const ProjectList = () => {
  const projects = [
    { name: 'Moore Mount', location: 'Funk Shoal', leads: 234 },
    { name: 'Terry Stream', location: 'Emmanuel Manor', leads: 342 },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <p>{project.name}</p>
          <p>{project.location}</p>
          <p>{project.leads}</p>
          <a href="/view-stats">View Stats</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
