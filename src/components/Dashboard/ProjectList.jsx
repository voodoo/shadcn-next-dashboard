import React from 'react';
import './ProjectList.css';

const ProjectList = () => {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65 },
    { id: 2, name: 'Mobile App', status: 'Planning', progress: 25 },
    { id: 3, name: 'Database Migration', status: 'Completed', progress: 100 },
  ];

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <div className="project-items">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{project.progress}% Complete</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList; 