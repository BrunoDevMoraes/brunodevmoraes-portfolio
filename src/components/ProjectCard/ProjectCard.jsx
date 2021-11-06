import React, { useContext } from 'react';
import './ProjectCard.css';
import AppContext from '../../context/AppContext';
import Bruno from '../../images/Bruno.jpg';

export default function ProjectCard({project}) {
  const { theme } = useContext(AppContext);
  return (
    <div id="card" className={theme === 'dark' ? 'dark-card' : 'light-card'}>
      <a className={theme === 'dark' ? 'dark-link' : 'light-link'} href="https://google.com">
        <img src={Bruno} alt="Project's gif"/>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  )
}
