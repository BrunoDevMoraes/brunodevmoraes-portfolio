import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [language, setLanguage] = useState('EN');
  const [theme, setTheme] = useState('dark');
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const contextValue = {
    language,
    setLanguage,
    theme,
    setTheme,
    hiddenMenu,
    setHiddenMenu,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Provider;
