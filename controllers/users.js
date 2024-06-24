const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/',async(req,res,next) => {
  User.find({}).then(result => {
    res.json(result).status(200)
  })
  .catch(error => next(error))
})

usersRouter.post('/signup', async (req,res) => {
  const { username,name,password,email,zipCode,phoneNumber} = req.body
  // include check for already existing usernames
  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password,saltRounds)
  
  const user = new User({
    username,
    name,
    email,
    passwordHash,
    zipCode,
    phoneNumber
  })
  user.save().then(result  => {
    res.status(201).json('registered')
  })
})

usersRouter.post('/login', async(req,res,next) => {
  const {username,password} = req.body
  const user = await User.findOne({username})

  const passwordCheck = async () => await bcrypt.compare(password,user.passwordHash)
  const userPresent = user === null ? false : passwordCheck()

  if(!(userPresent && passwordCheck)){
    return res.status(401).json('Invalid username or password')
  }
  res.status(200).json(`allow`)
})

module.exports = usersRouter