import React from 'react';
import Abilities from '../Abilities/Abilities';
import About from '../About/About';
import Certifications from '../Certifications/Certifications';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import './Body.css'

export default function Body() {
  return (
    <div id="body">
      <Greeting />
      <div id="redirect-about"></div>
      <About/>
      <div id="redirect-abilities"></div>
      <Abilities/>
      <div id="redirect-projects"></div>
      <Projects/>
      <div id="redirect-certifications"></div>
      <Certifications/>
    </div>
  )
}
