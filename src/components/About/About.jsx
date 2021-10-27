import React from 'react';
import Bruno from '../../images/Bruno.jpg';
import './About.css';

export default function About() {
  return (
    <div id="about">
      <img src={Bruno} alt="Bruno smiling "/>
      <h3>About me</h3>
      <p>
        I'm passionate about technology, innovation and project development. I am communicative, creative and I believe in iniciatives that really care about people and have the proposal of building solutions for an integrated society. On my way to become a full stack developer, I study Software Development at Trybe.
      </p>
    </div>
  )
}
