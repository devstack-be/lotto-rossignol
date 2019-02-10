import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Admin from'./components/Admin/Admin'
import Main from './components/Main/Main'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path='/admin' component={Admin} />
              <Route path='/' component={Main}/>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App
