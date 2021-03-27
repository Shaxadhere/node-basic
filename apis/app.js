const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express();

const connectString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log(`Error: ${error}`)
})

app.use(bodyParser.json())
app.use(cors())
app.use(morgan("dev"))
app.use(expressValidator())




const port = 8080;
app.listen(port, () => {
    console.log("Listening on port 8080")
})