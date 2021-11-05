import React from 'react';
import Bruno from '../../images/Bruno.jpg';
import './CertificationCard.css';

export default function CertificationCard({info}) {
  return (
    <div id="certification-card">
      <img src={Bruno} alt="Certification picure"/>
      <div id="certification-info-box">
        <h3>{info.name}</h3>
        <p>{info.description}</p>
      </div>
    </div>
  )
}
