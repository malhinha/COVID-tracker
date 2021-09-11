const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  dateOfBirth: {type: Date, required: true},
  zipCode: {type: String, required: true},
  doctorName: {type: String, required: true},
  providerLocation: {type: String, required: true},
})

module.exports = model('User', userSchema)
