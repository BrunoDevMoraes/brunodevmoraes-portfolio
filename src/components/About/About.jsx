import React, { useContext } from 'react';
import Bruno from '../../images/Bruno.jpg';
import AppContext from '../../context/AppContext';
import './About.css';

export default function About() {
  const { language, theme } = useContext(AppContext);

  function renderAbout() {
    if (language === 'PT') {
      return (
        <div id="about">
          <img src={Bruno} alt="Bruno smiling"/>
          <div id="about-text-and-title">
            <h3>Conheça-me</h3>
            <p className={theme === 'dark' ? 'dark-about-text' : 'light-about-text'}>
            Sou apaixonado por tecnologia, inovação e elaboração de projetos.
            Comunicativo e criativo, acredito em iniciativas que se preocupam
            com pessoas e que se propõem a construir soluções para uma sociedade mais integrada.
            A caminho de me tornar um desenvolvedor full stack,
            estudo Desenvolvimento de Software na Trybe.
            </p>
          </div>
        </div>
      );
    }
    return (
      <div id="about">
        <img src={Bruno} alt="Bruno smiling "/>
        <div id="about-text-and-title">
          <h3>Get to know me</h3>
          <p className={theme === 'dark' ? 'dark-about-text' : 'light-about-text'}>
            I'm passionate about technology,
            innovation and project development.
            I am communicative, creative and I believe
            in iniciatives that really care about people
            and have the proposal of building solutions
            for an integrated society. On my way to become
            a full stack developer, I study Software Development at Trybe.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderAbout()}
    </>
  );
}
