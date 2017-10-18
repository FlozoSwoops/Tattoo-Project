import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ArtistStyle = styled.div`
text-align: center;
`



class Artist extends Component {

    
    state = {
        artists: []
    }

    getAllArtist = () => {
        axios.get('localhost:3001/api/artist').then(response => {
            this.setState({ artists: response.data })
        })
    }

    render() {
        return (
            <ArtistStyle>
            <div>
                <h3>Please Select an artist</h3>
                <h5><a href="/artist/:artistId">David Sena</a></h5>
                <h5><a href="/artist/:horiyoshiId">Horiyoshi III</a></h5>

                {/* {this.state.artists.map(artist => {
                    return (<Link to={`/artist/${artist._id}`}>{artist.name}</Link>)

                })} */}
            </div>
            </ArtistStyle>
        )
    }
}

export default Artist
