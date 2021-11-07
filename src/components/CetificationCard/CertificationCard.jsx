import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './CertificationCard.css';

export default function CertificationCard({info}) {
  const { theme } = useContext(AppContext);

  return (
    <div
      id="certification-card"
      className={theme === 'dark' ? 'dark-certification-card' : 'light-certification-card'}
    >
      <a href={info.link} target="blank" id="card-information-img">
        <img src={info.img} alt="Certification picure"/>
        <div id="certification-info-box">
          <h3>{info.name}</h3>
          <p>{info.issuance}</p>
          <p>{info.expiration}</p>
        </div>
      </a>
    </div>
  )
}
