const express = require('express');
const app = express();
const db = require('./Config/mongoose');
const router = require('./Route');
const PORT = 80;

// using this middleware to decode forms data if its urlencoded
app.use(express.urlencoded({extended:true}));

// using this middleware to decode forms data if the data is in json format
app.use(express.json());

// creating general routes
app.use('/', router)


// listening server
app.listen(PORT, ()=>{console.log(`Server is up and running on port ${PORT}`) })