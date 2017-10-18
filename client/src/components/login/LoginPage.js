import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    state = {
        users: []
    }

    getAllUser = () => {
        axios.get('localhost:3001/api/user').then(response => {
            this.setState({ users: response.data })
        })
    }

    render() {
        return (
            <div>
                <form>
                <h3>Log-In</h3>
                <label>Username</label>
                <input type="text"  onChange={this.handleChange} default="Mark"/>
                <label>Password</label>
                <input type="text"/>
                <button>Submit</button>


                </form>

                
            </div>
        )
    }
}

export default Login
