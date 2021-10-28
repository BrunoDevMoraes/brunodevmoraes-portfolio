import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard'
import data from '../../data';
import './Projects.css';


export default function Projects() {
  return (
    <div id="cards-selection">
      <button>Seta</button>
      <ProjectCard project={data[1]}/>
      <button>Seta</button>
    </div>
  )
}
