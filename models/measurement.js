const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema({
  current:Number,
  voltage:Number,
  power:Number
})

readingSchema.set('toJSON',{
  transform:(document , returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('Reading',readingSchema)