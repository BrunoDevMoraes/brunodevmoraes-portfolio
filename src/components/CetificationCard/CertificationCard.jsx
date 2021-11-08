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
          <h4>{info.name}</h4>
          <h5>{info.company}</h5>
          <h5>{info.issuance}</h5>
          <h5>{info.expiration}</h5>
        </div>
      </a>
    </div>
  )
}
