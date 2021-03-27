const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express();

mongoose.connect(connectString)
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log(`Error: ${error}`)
})

const port = 8080;
app.listen(port, () => {
    console.log("Listening on port 8080")
})