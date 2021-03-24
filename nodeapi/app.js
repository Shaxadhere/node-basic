const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

const connectString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

//Middlewares
app.use(morgan("dev"))

//bring in routes
const postRoutes = require('./routes/post')

app.use('/', postRoutes)

const port = 8080;
app.listen(port, () => {console.log(`Listening on ${port}`)})