const readingRouter = require('express').Router()
const Reading = require('../models/measurement')

readingRouter.get('/',async(req,res,next) => {
  Reading.find({}).then(result => {
    res.json(result).status(200)
  })
  .catch(error => next(error))
})

readingRouter.post('/update',async(req,res,next) =>{
  const {current,voltage,power} = req.body
  const reading = new Reading({
    current,
    voltage,
    power
  })
  reading.save().then(result => {
    res.status(201).json(result)
  })
})

module.exports = readingRouter