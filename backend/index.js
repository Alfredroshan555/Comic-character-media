// imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const posts = require('./models/posts')

const app = express()
const port = process.env.PORT || 5000
    // middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('uploads'))
    // Database connection
mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { console.log("Connected to database"); }).catch((err) => {
        console.log(err);
    })
    // routes
app.use('/posts', require('./routes/routes'))

// Start server
app.listen(port, () => { console.log(`Server @ http://localhost:${port}`); })