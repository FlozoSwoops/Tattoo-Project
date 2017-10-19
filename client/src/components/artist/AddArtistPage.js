import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


//used sample project signup form
class AddArtist extends Component {
  state = {
    newArtist: {
      name: '',
      yearsExperience:''
      
    },
    redirectToArtist: false,
    newArtistId: ''
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateArtist = {...this.state.newArtist}

    
    updateArtist[attribute] = event.target.value
    this.setState({newArtist: updateArtist})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post('/api/artists', {
      'artist': this.state.newArtist
    })

    this.setState({redirectToArtist: true, newArtistId: res.data._id})
  }

  render () {
    if (this.state.redirectToArtist) {
      return <Redirect to={`/artists/${this.state.newArtistId}`} />
    }

    return (
      <div>
        <h1>Add A New Artist</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Artist Name</label>
            <input
              onChange={this.handleChange} name="name"
              type="text" value={this.state.newArtist.name}
            />
          </div>
          <div>
            <label htmlFor="yearsExperience">Years Working</label>
            <input onChange={this.handleChange}
              value={this.state.newArtist.yearsExperience}
              name="yearsExperience" type="text" />
          </div>
          <button>Add Artist</button>
        </form>
      </div>
    )
  }
}

export default AddArtist