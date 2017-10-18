const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', async (request, response) => {
  try {
    const users = await User.find({})
    response.json(users)
  } catch (error) {
    response.send(error)
  }
})

module.exports = router