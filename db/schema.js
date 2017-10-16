const mongoose = require('mongoose')
const Schema= mongoose.Schema

const userSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    numberOfTattos: {
        type: String,
        required: true
    }
})

const artSchema = new Schema({
    style:{
        type: String,
        required: true,
    },
    totalTime:{
        type: Number,
        required: true,
    },
    numSessions:{
        type: Number,
        required: true
    },
    color:{
        type: Boolean,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const artistSchema = new Schema({
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
        required: true
    },
    yearsExperience:{
        type: Number,
        required: true
    },
    art: [artSchema]
})

const UserModel = mongoose.model('user', userSchema)
const ArtistModel = mongoose.model('Artist', artistSchema)
const ArtModel = mongoose.model('Art', artSchema)
module.exports = {
    UserModel,
    ArtistModel,
    ArtModel
}