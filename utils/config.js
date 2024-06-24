// loading the .env file contents into the environment variables
require('dotenv').config()
const url =process.env.MONGODB_URI
const PORT = process.env.PORT || 8080

module.exports={url,PORT}