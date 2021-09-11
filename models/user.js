const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dateOfBirth: {type: Date, required: true},
  zipCode: {type: String, required: true},
  doctor: {
    firstName: {type: String, required: false},
    lastName: {type: String, required:false},
    doctorPhone: {type: Number, required: false},
    email: {type: String, required:false},
    facilityName: {type: String, required:false},
    facilityLocation: {type: String, required:false},
    facilityNumber: {type: Number, required: false}    
  }
})

module.exports = model('User', userSchema)
