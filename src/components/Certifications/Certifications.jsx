import React, { useContext } from 'react';
import {certifications} from '../../data';
import AppContext from '../../context/AppContext';
import CertificationCard from '../CetificationCard/CertificationCard';
import './Certifications.css';

export default function Certifications() {
  const { language } = useContext(AppContext)

  return (
    <div id="certifications-full-section">
      {language === 'PT'
      ? <>
          <h3 id="certfications-section-title">Minhas Certificações</h3>
          <div id="certfications-box">
          {certifications.PT.map((certification) => <CertificationCard info={certification}/>)}
          </div>
      </>
      : <>
        <h3 id="certfications-section-title">My Certifications</h3>
        <div id="certfications-box">
        {certifications.EN.map((certification) => <CertificationCard info={certification}/>)}
        </div>
      </>
      }
    </div>
  )
}
