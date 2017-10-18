import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../background1.jpg';

const Content = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 1000px;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
`

const ArtistStyle = styled.div`
text-align: center;
`

class HomePage extends Component {
  render () {
    return (
      <Content>
      <div>
        <h1>Inktrest</h1>
        <h2>Helping Give inspiration for your next piece of skin art!</h2>
      </div>
      </Content>
    )
  }
}

export default HomePage