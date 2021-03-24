const express = require('express')
const app = express()
const morgan = require('morgan')


//Middlewares
app.use(morgan("dev"))

//bring in routes
const {getPosts} = require('./routes/posts')

app.get('/', getPosts)

const port = 8080;
app.listen(port, () => {console.log(`Listening on ${port}`)})