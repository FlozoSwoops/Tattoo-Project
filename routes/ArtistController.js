const express = require('express')
const router = express.Router()
const {Artist } = require('../db/schema')


router.get('/', (request, response) =>{
    response.send()
})