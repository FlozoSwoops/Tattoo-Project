const mongoose = require('mongoose')
const Schema= mongoose.Schema

const userSchema =  Schema ({
    name:{
        type: String,
    },
    age: {
        type: Number,
    },
    location: {
        type: String,
    },
    numberOfTattos: {
        type: String,
    }
})

const artSchema =  Schema({
    style:{
        type: String,
    },
    totalTime:{
        type: Number,
    },
    numberSessions:{
        type: Number,
    },
    
    description:{
        type: String,
    },
    imageOne: String,
    imageTwo: String,
    imageThree: String
})

const artistSchema =  Schema({
    name:{
        type: String,
        Required: false
    },
    age:{
        type: Number, 
        required: false
    },
    location:{
        type: String,
        required: false
    },
    yearsExperience:{
        type: Number,
        required: false
    },
    pic:{
        type: String, 
        required: false
    },
    artwork: [artSchema]
})

const UserModel = mongoose.model('User', userSchema)
const ArtistModel = mongoose.model('Artist', artistSchema)
const ArtModel = mongoose.model('Art', artSchema)
module.exports = {
    UserModel, ArtistModel, ArtModel
}