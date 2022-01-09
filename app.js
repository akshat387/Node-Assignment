// Main file where the whole functionality of the API is written

const express = require("express"); // installing package express for creating basic routes for CRUD apllication

const mongoose = require('mongoose'); // installing this mongoose package for easy database connection

const bodyParser = require('body-parser')

const dotenv = require("dotenv"); // for hiding the key details that you don't want to show to the user

const connectDB = require("./config/db"); // connecting to the database

const cors = require('cors') // for running it on the broweser without getting blocked by online compilers

dotenv.config({ path: "./config/config.env" }); // connecting it with the main config file
// Middleware


const app = express(); // calling the package

connectDB();

app.use(cors());

app.use(bodyParser.json());

// Routes
// const productRoute = require('./routes/product')



// app.use('/', require('./routes/main'))
app.use('/', require('./routes/product'))
// app.use('/category', require('./routes/category'))

// app.get('/', (req,res) =>{
//   res.send('home page')
// })


// creating a port

app.listen(5000);
