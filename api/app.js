const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// Connecting to database
const connectString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database")
})

mongoose.connection.on('error', (error) => {
    console.log(`Database error: ${error}`)
})

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(expressValidator())

//Adding post routes



//Listening to server
const port = 8080;
app.listen(8080, () => {
    console.log(`Listening to port ${port}`)
})