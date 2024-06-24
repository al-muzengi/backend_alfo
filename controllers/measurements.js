const readingRouter = require('express').Router()
const Reading = require('../models/measurement')

readingRouter.post('/update',async(req,res,next) =>{
  const {} = req.body
  const reading = new Reading({ })
  reading.save().then(result => {
    res.status(201).json(result)
  })
})

module.exports = readingRouter