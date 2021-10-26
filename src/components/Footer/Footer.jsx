import React from 'react'
import './Footer.css';
import githubLogo from '../../images/github.svg';
import envelope from '../../images/envelope.svg';
import linkedin from '../../images/linkedin.svg';
import whattsapp from '../../images/whatsapp.svg';

export default function Footer() {
  return (
    <div id="footer">
      <a href="https://www.linkedin.com/in/brunodevmoraes/" target="blank">
        <img src={linkedin} alt="Linkedin's logo" width="20vw"/>
      </a>
      <a href="https://github.com/BrunoDevMoraes" target="blank" >
        <img src={githubLogo} alt="GitHub's logo" width="20vw"/>
      </a>
      <a href="https://mailto:brunodevmoraes@gmail.com" target="blank">
        <img src={envelope} alt="Envelope" width="20vw"/>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+5532991172902" target="blank">
        <img src={whattsapp} alt="WhatsApp's logo" width="20vw"/>
      </a>
    </div>
  )
}
