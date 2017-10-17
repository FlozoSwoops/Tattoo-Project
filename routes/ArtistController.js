const express = require('express')
const router = express.Router()
const {Artist } = require('../db/schema')


router.get('/artist', async (request, response) =>{
    try{
        const artists = await Artist.find({})
        response.json(artists)
    } catch (error){
        response.send(error)
    }
})

module.exports = router