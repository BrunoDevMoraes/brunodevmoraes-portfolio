import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard'
import data from '../../data';
import './Projects.css';


export default function Projects() {
  return (
    <div id="cards-lib">
      {data.map((element) => <ProjectCard project={element}/>)}
    </div>
  )
}
