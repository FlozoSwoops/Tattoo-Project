import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ArtistPage from './components/artist/ArtistPage'
import LogInPage from './components/login/LoginPage'
import ArtPage from './components/art/ArtPage'
import styled from 'styled-components'
import Nav from './components/Nav'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
       <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/artist" component={ArtistPage} />
            <Route exact path="/artist/:id" component = {ArtPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
