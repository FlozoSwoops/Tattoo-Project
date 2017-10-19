import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import img from '../../22j.jpg';

const Content = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 900px;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
`

class ArtPage extends Component {
    state = {
        artists: []
    }

    componentWillMount() {
        this.getAllArt()
    }

    getAllArt = async () => {
        try {
            const res = await axios.get('/api/artists/:id/art')
            this.setState({ artists: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <Content>
                <div>
                    <h1>This is the art page</h1>

                    <img src="" alt="" />
                    <button>Delete Artist</button>
                </div>
            </ Content>
        );
    }
}

export default ArtPage;