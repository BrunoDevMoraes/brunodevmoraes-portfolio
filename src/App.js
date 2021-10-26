import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import './App.css'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ MainPage }/>
      </Switch>
    </div>
  )
}
