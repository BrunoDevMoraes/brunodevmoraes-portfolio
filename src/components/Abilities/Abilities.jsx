import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Abilities.css';

export default function Abilities() {
  const { language } = useContext(AppContext);

  function renderAbilities() {
    if (language === 'PT') {
      return (
        <div id="abilities">
        <div id="hard">
          <h3>Hard Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>React Hooks</li>
            <li>C</li>
            <li>C++</li>
            <li>Git</li>
          </ul>
        </div>
        <div id="soft">
          <h3>Soft Skills</h3>
          <ul>
            <li>Comunicação</li>
            <li>Criatividade</li>
            <li>Empatia</li>
            <li>Trabalho em equipe</li>
            <li>Negociação</li>
            <li>Pensamento Crítico</li>
            <li>Liderança</li>
          </ul>
        </div>
      </div>
      );
    }
    return (
      <div id="abilities">
        <div id="hard">
          <h3>Hard Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>React Hooks</li>
            <li>C</li>
            <li>C++</li>
            <li>Git</li>
          </ul>
        </div>
        <div id="soft">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Creativity</li>
            <li>Empathy</li>
            <li>Team Work</li>
            <li>Negotiation</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      { renderAbilities() }
    </>
  )
}
