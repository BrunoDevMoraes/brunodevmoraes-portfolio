import React, { useContext } from 'react';
import Bruno from '../../images/Bruno.jpg';
import AppContext from '../../context/AppContext';
import './CertificationCard.css';

export default function CertificationCard({info}) {
  const { theme } = useContext(AppContext);

  return (
    <div
      id="certification-card"
      className={theme === 'dark' ? 'dark-certification-card' : 'light-certification-card'}
    >
      <img src={Bruno} alt="Certification picure"/>
      <div id="certification-info-box">
        <h3>{info.name}</h3>
        <p>{info.description}</p>
      </div>
    </div>
  )
}
