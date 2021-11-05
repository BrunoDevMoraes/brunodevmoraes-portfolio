import React, { useContext, useState } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import data from '../../data';
import AppContext from '../../context/AppContext';
import './Projects.css';


export default function Projects() {
  const { language } = useContext(AppContext);
  const [currentProject, setCurrentProject] = useState(0);

  function handleBackClick() {
    const auxCurrentProject = currentProject;
    auxCurrentProject > 0 ? setCurrentProject(auxCurrentProject - 1) : setCurrentProject(4);
  }

  function handleNextClick() {
    const auxCurrentProject = currentProject;
    auxCurrentProject < 4 ? setCurrentProject(auxCurrentProject + 1) : setCurrentProject(0)
  }

  function renderProjectCard() {
    if (language === 'PT') {
      return (
        <ProjectCard project={data.PT[currentProject]}/>
      );
    }
    return (
      <ProjectCard project={data.EN[currentProject]}/>
    );
  }

  return (
    <div id="projects-section">
      {language === 'PT' ? <h3 id="projects-section-title">Meus Projetos</h3>
      : <h3 id="projects-section-title">My Projects</h3>}
      <div id="cards-selection">
        <button onClick={handleBackClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ED6112" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </button>
        {renderProjectCard()}
        <button onClick={handleNextClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ED6112" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
