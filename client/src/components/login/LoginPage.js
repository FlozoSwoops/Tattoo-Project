import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
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
`

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
            <Content>
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
            </Content>
        )
    }
}

export default Login
