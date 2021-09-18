const { Schema, model } = require('mongoose');

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: false},
  lastName: {type: String, required: false},
  dateOfBirth: {type: Date, required: false},
  location: {
    state: {type: String, uppercase: true, required: false, enum: statesArray},
    city: {type: String, required: false},
    zipCode: {type: String, required: false},
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
