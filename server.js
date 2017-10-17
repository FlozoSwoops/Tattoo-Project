// import variables
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//promise override 
mongoose.Promise = global.Promise;


//connect DB
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 


//Middleware
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());



//controllers
const ArtistController = require('./routes/ArtistController')
app.use('/api/artists', ArtistController)

app.use('/api/artists/artistId/art', ArtistController)


// If the connection throws an error
connection.on('error', (error) => {
  console.log('Mongoose default connection error: ' + error);
}); 


//react app
app.get('/', (request,response) => {
	response.sendFile(__dirname + '/client/build/index.html')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})