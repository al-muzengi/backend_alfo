const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    unique:true,
    required:[true,'Username field cannot be empty.'],
    minLength:4
  },
  name: {
    type:String,
    required:true,
    minLength:10
  },
  email:{
    type:String,
    required:true,
    unique:true,
    minLength:10
  },
  passwordHash:String,
  zipCode:Number,
  phoneNumber:String
})
userSchema.plugin(validator)

userSchema.set('toJSON',{
  transform:(document , returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User',userSchema)