import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './HiddenMenu.css';

export default function HiddenMenu() {
const { language, setHiddenMenu, hiddenMenu, theme } = useContext(AppContext);

  function handleHiddenClick() {
    if (hiddenMenu === true) {
      setHiddenMenu(false);
    }
  }

  if (language === 'PT') {
    return (
      <div id="hidden-menu" className={theme === 'dark' ? 'dark-hidden-menu' : 'light-hidden-menu'}>
        <a href="#about" onClick={handleHiddenClick}>
        <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Sobre mim</h4></div>
        </a>
        <a href="#abilities" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
          <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Habilidades</h4></div>
        </a>
        <a href="#projects-section" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
          <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Projetos</h4></div>
        </a>
        <a href="#certifications-full-section" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
          <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Certificações</h4></div>
        </a>
        <div id="decorative-rectangle" className={theme === 'dark' ? 'dark-decorative-rectangle' : 'light-decorative-rectangle'}/>
      </div>
    );
  }
  return (
    <div id="hidden-menu" className={theme === 'dark' ? 'dark-hidden-menu' : 'light-hidden-menu'}>
      <a href="#about" onClick={handleHiddenClick}>
       <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>About me</h4></div>
      </a>
      <a href="#abilities" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
        <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Abilities</h4></div>
      </a>
      <a href="#projects-section" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
        <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Projects</h4></div>
      </a>
      <a href="#certifications-full-section" className={theme === 'dark' ? 'dark-option' : 'light-option'} onClick={handleHiddenClick}>
        <div className={theme === 'dark' ? 'dark-option' : 'light-option'}><h4>Certifications</h4></div>
      </a>
      <div id="decorative-rectangle" className={theme === 'dark' ? 'dark-decorative-rectangle' : 'light-decorative-rectangle'}/>
    </div>
  );
}
