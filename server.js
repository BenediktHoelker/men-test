// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const env = require('dotenv').config();  

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configuring the database
mongoose.connect(process.env.COSMOSDB_CONNSTR+"?ssl=true&replicaSet=globaldb", {
    // auth: {
    //   user: process.env.COSMODDB_USER,
    //   password: process.env.COSMOSDB_PASSWORD
    // }
  })
  .then(() => console.log('Connection to CosmosDB successful'))
  .catch((err) => console.error(err));


// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ZeptoBook Product app"});
});

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});