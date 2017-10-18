import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ArtistPage from './components/artist/ArtistPage'
import LogInPage from './components/login/LoginPage'
import styled from 'styled-components'
// import img from './background.jpg';

// const Content = styled.div`
//     background-image: url(${img});
//     width: 100%;
//     height: 720px;
//     background-size:cover;
//     background-position: center;
//     background-repeat: no-repeat;


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <span className="nav">

            <button><Link to="/">Home</Link></button>


            <button><Link to="/login">LogIn</Link></button>

            <button><Link to="/artist">Art</Link>
            </button>
          </span>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/artist" component={ArtistPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
