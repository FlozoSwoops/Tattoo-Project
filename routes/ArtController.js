const express = require('express')
const router = express.Router({mergeParams: true})
const { ArtistModel } = require('../db/schema')

router.get('/', async (request,response) => {
    try{
        const artist = await ArtistModel.findById(request.params.id)
        console.log(artist)
        const artwork = await artist.artwork
        response.json(artwork)
    } catch (error){
        response.send(error)
    }
})

module.exports = router