import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import AddArtistPage from './AddArtistPage'

const ArtistStyle = styled.div`
text-align: center;
`



class Artist extends Component {

    state= {
        artists: []
    }

    componentWillMount() {
        this.getAllArtists()
    }

    getAllArtists = async () => {
        try {
            const res = await axios.get('/api/artists')
            this.setState({ artists: res.data })
        } catch (err) {
            console.log(err)
        }
    }


    render() {

        return (

            <div>
                <h2> Select Artist</h2>
                {this.state.artists.map((artist) => {
                    return (<Link key={artist._id} to={`/artist/${artist._id}`}>{artist.name}</Link>)



                })}
                <AddArtistPage />
            </div>
        )
    }
}
export default Artist
