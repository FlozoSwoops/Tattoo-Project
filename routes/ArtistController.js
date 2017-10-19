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
        console.log(artist)
        response.json(artist)
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async (request, response) => {
    try {
      const newArtist = new ArtistModel(req.body.artist)
      const saved = await newArtist.save()
      res.json(saved)
    } catch (err) {
      res.send(err)
    }
  })

  router.delete('/', async(request, response) => {
      const user = await user.findById(request.params.userId)
      artist.id(request.params.id).remove()
      const saved = await user.save()
      res.json(saved)
  })
module.exports = router