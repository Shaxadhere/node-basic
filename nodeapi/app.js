const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')


//Connecting to database
const connectString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connectString, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
.then(() => console.log("Connected to database"))

mongoose.connection.on('error', err => {
    console.log(`Database connection error: ${err.message}`)
})


//Middlewares
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())

//Adding post routes
const postRoutes = require('./routes/post')
app.use('/', postRoutes)

//Configuring port
const port = 8080;
app.listen(port, () => {console.log(`Listening on ${port}`)})