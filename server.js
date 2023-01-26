// Dependencies //
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
require('dotenv').config();

const { PORT = 4000, MONGODB_URL } = process.env;

const app = express();

    // Database Connection //
//Establish Connection //
mongoose.connect(MONGODB_URL);

// Connection Events //
mongoose.connection
.on('open', () => console.log("You are connected to mongoose"))
.on('close', () => console.log("You are disconnected to mongoose"))
.on('error', () => console.log(error));

mongoose.set('strictQuery', true);

// Middleware //
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies 

// Models
const Runtime = require('./models/runtime');
const Index = require('./models/index');


// Controllers //
const indexController = require('./controllers/index');
app.use('/index', indexController);


// create a test route //
app.get("/", (req, res) => {
    res.send("hello world");
});

// Listening 
app.listen(PORT, () => console.log('express is listening on:', PORT));