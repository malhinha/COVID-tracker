const { Schema, model } = require('mongoose');

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dateOfBirth: {type: Date, required: true},
  location: {
    state: {type: String, uppercase: true, required: true, enum: statesArray},
    city: {type: String, required: true},
    zipCode: {type: String, required: true},
  },
  doctor: {
    firstName: {type: String, required: false},
    lastName: {type: String, required:false},
    doctorPhone: {type: Number, required: false},
    email: {type: String, required:false},
    facilityName: {type: String, required:false},
    facilityLocation: {type: String, required:false},
    facilityNumber: {type: Number, required: false}
  },
  symptoms: [{type: Schema.Types.ObjectId, ref: "Symptom"}]
})

module.exports = model('User', userSchema)
