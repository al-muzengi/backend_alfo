const {url} = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')
const readingRouter = require('./controllers/measurements')

// Establishing the connection to the atlas cluster
mongoose.connect(url).then(() => {
  console.log(`Connected to the database`)
})
.catch((error) => {
  console.log(`Error: ${error.message}`)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// controllers for the routing
app.use('/api/users',usersRouter)
app.use('/api/readings',readingRouter)

module.exports = app