const express = require('express')
const app = express()
const morgan = require('morgan')


//Middlewares
app.use(morgan("dev"))

//bring in routes
const postRoutes = require('./routes/post')

app.use('/', postRoutes)

const port = 8080;
app.listen(port, () => {console.log(`Listening on ${port}`)})