require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { UserModel, ArtistModel, ArtModel } = require('./schema')

const Mark = new UserModel ({
    name: "Mark",
    age: 29,
    location: "ATL",
    numberOfTattoos: 5
})

const phoenix = new ArtModel({
    style: "Irezumi",
    totalTime: 48,
    numberSessions: 24,
    color: true,
    description:"A Phoenix as the centerpiece of a traditional irezumi.",
    imageOne:"https://i.imgur.com/IN2uqQG.jpg",
    imageTwo:"https://i.imgur.com/suWgvzS.jpg",
    imageThree:"https://i.imgur.com/QdhGw8K.jpg",
})

const Sena = new ArtistModel ({
    name: " David Sena",
    age: 35,
    location: " NYC",
    yearsExperience: 12,
    pic: "https://imgur.com/a/etV4Z"
})



ArtistModel.remove({})
    .then(() => Sena.save())
    .then(() => console.log('Saved'))
    .then(() => mongoose.connection.close())