import React from 'react';
import './css/Projects.css';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/com.jfif'


export default function Projects() {
  const projects = [
    // {
    //   title: 'Expense Tracker System',
    //   description: 'Application for tracking personal finances',
    //   tech: ['React', 'Spring Boot'],
    //   github: 'https://github.com/yourusername/expense-tracker',
    //   image: img4
    // },
    {
      title: 'Alumni Event Management System',
      description: 'Application for organize events for alumni for Re connection',
      tech: ['React', 'Spring Boot'],
      github: 'https://github.com/Anushka1522/AlumniEventManagementSystem/tree/main',
      image: img4
    },
    {
      title: 'Employee Management',
      description: 'A comprehensive system for managing employee data',
      tech: ['React', 'Spring Boot'],
      github: 'https://github.com/yourusername/employee-management',
      image: img5
    }
  ];

  return (
    <section className="project-section">
      <h2 className="project-heading">Projects <span className="dot">.</span></h2>
      <p className="project-subtext">Some of my recent work</p>
      <div className="card-grid">
        {projects.map((proj, idx) => (
          <div className="neon-card" key={idx}>
            <img src={proj.image} alt={proj.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{proj.title}</h3>
              <p className="card-desc">{proj.description}</p>
              <div className="card-tags">
                {proj.tech.map((t, i) => (
                  <span className="tag" key={i}>{t}</span>
                ))}
              </div>
              <a href={proj.github} target="_blank" rel="noreferrer" className="view-btn">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
