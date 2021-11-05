import React from 'react';
import './ProjectCard.css';
import Bruno from '../../images/Bruno.jpg';

export default function ProjectCard({project}) {
  return (
    <div id="card">
      <a href="https://google.com">
        <img src={Bruno} alt="Project's gif"/>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  )
}
