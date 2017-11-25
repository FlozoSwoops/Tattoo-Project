import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ArtistPage from '../artist/ArtistPage'

const Content = styled.div`
    width: 100%;
    height: 1000px;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    color: rgba(26, 188, 156,1.0);
    text-align: center;
`

const ArtistStyle = styled.div`
text-align: center;
`

class HomePage extends Component {
 state = {
   artist: [],
 }

 componentWillMount
  render() {
    return (
      <Content>
        <div>
          <h1>Inktrest</h1>
          <h2>Helping Give inspiration for your next piece of skin art!</h2>
          <ArtistPage />


        </div>
      </Content>
    )
  }
}

export default HomePage