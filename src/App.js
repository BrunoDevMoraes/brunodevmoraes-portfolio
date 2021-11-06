import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './App.css';
import AppContext from './context/AppContext';

export default function App() {
  const { theme } = useContext(AppContext);
  return (
    <div className={theme === 'light' ? 'light-app' : 'dark-app'}>
      <Switch>
        <Route path="/" component={ MainPage }/>
      </Switch>
    </div>
  )
}
