import React from 'react';
import './ProjectCard.css';
import Bruno from '../../images/Bruno.jpg';

export default function ProjectCard({project}) {
  return (
    <div id="card">
      <a href="https://google.com">
        <img src={Bruno} alt="Project's gif"/>
        <h3>Project's Name {project}</h3>
        <p>Project's Description</p>
      </a>
    </div>
  )
}
