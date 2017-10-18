const express = require('express')
const router = express.Router()
const {ArtistModel } = require('../db/schema')


router.get('/', async (request, response) =>{
    try{
        const artists = await ArtistModel.find({})
        response.json(artists)
    } catch (error){
        response.send(error)
    }
})
router.get ('/:id', async (request, response) =>{
    try{
        const artist = await ArtistModel.findById(request.params.id)
        res.json(artist)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router