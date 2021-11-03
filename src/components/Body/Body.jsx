import React from 'react';
import Abilities from '../Abilities/Abilities';
import About from '../About/About';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import './Body.css'

export default function Body() {
  return (
    <div id="body">
      <Greeting />
      <About/>
      <Abilities/>
      <Projects/>
    </div>
  )
}
