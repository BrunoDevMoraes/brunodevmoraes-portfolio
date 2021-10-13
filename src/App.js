import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <div>
      <h1>Dale</h1>
      <Switch>
        <Route path="/" component={ MainPage }/>
      </Switch>
    </div>
  )
}
