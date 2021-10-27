import React from 'react';
import Abilities from '../Abilities/Abilities';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Body.css'

export default function Body() {
  return (
    <div id="body">
      <About/>
      <Abilities/>
      <Projects/>
    </div>
  )
}
