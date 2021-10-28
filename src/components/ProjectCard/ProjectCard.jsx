import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({project}) {
  return (
    <div id="card">
      <a href="google.com">
        <img src="" alt="Project's gif"/>
        <h3>Project's Name {project}</h3>
        <p>Project's Description</p>
      </a>
    </div>
  )
}
