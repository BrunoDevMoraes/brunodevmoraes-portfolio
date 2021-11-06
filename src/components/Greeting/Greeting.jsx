import React, { useContext } from 'react';
import AppContext from '../../context/AppContext.js';
import './Greeting.css';

export default function Greeting() {
  const { language, theme } = useContext(AppContext)

  function renderGreeting() {
    if (language === 'EN') {
      return (
        <h3 id="greeting" className={theme === 'dark' ? 'dark-greeting' : 'light-greeting'}>
          Hello! Thanks for visiting my page! My name's Bruno.
          I am a software developer! Here you can check it out my portfolio and get to know me better!
          Feel comfortable to contact me.
        </h3>
      );
    }
    return (
      <h3 id="greeting" className={theme === 'dark' ? 'dark-greeting' : 'light-greeting'}>
        Olá! Obrigado por visitar minha página! Meu nome é Bruno.
        Sou desenvolvedor de software! Aqui você pode conferir meu portfólio e me conhecer melhor!
        Fique à vontade para entrar em contato comigo.
      </h3>
    )
  }

  return (
    <>
      { renderGreeting() }
    </>
  )
}
