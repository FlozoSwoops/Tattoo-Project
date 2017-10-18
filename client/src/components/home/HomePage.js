import React, { Component } from 'react'
import styled from 'styled-components'

const ArtistStyle = styled.div`
text-align: center;
`

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Inktrest</h1>
        <h2>Helping Give inspiration for your next piece of skin art!</h2>
      </div>
    )
  }
}

export default HomePage