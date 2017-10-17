import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    state = {
        users: []
    }

    getAllUser = () => {
        axios.get('localhost:3001/api/artist').then(respons => {
            this.setState({ users: response.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select a User</h3>
                {this.state.users.map(artist => {
                    return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)

                })}
            </div>
        )
    }
}

export default LogIn
