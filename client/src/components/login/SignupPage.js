import React, { Component } from 'react'
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


createUser = () => {
    axios.post('/api/users', {
      user: this.state.user
    }).then((res) => {
      this.setState({redirectToHome: true, createdUser: res.data})
    })
  }