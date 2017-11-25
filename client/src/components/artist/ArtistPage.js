import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import AddArtistPage from './AddArtistPage'

const Content = styled.div`
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



class Artist extends Component {

    state = {
        artists: [],
        showForm: false
    }

    async componentWillMount() {
        try{
        const response = await axios.get('/api/artists')
        this.setState({ artists: response.data })
        } catch (error) {
        conole.log(error)
        }
    }

    toggleForm = () => {
        this.setState({ showForm : !this.state.showform})
    }


    render() {
        return (
         
                    
                
            {this.state.artists.map((artist) => {
                return (<img src={artist.pic}/>
                <Link to={`/artist/${artist._id}`}>{artist.name}</Link>)
            })}
                    {/* <div>
                    {this.state.showForm ? <AddArtistPage  /> : <button onClick={this.toggleForm}>Add Artist</button>}

                    {this.state.showForm ? <button onClick={this.toggleForm}>Close Form</button> : ''}
                    </div> */}

                  
            
        ) 
    }
}
export default Artist
