const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const morgan = require('morgan');

// Connecting to Database
const connectString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to database");
})

mongoose.connection.on('error', (error) => {
    console.log(`Database Error: ${error}`)
})

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(expressValidator())
app.use(bodyParser.json())

// Adding post routes
const postRoutes = require('./routes/post')
app.use('/', postRoutes)

// Listening to port
const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})
