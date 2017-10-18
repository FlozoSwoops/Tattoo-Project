import React, { Component } from 'react';
import axios from 'axios'

class ArtPage extends Component {
    state= {
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
            <div>
                {/* <h1>This is the art page</h1> */}

                
            </div>
        );
    }
}

export default ArtPage;