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
router. get ('/artist/artistId' async(request, response =>{
    try{
        const artistId = await Artist.findByID(request.params.id)
        res.json(user)
    }
}))
module.exports = router