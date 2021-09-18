const { Schema, model} = require('mongoose');

const symptomSchema = new Schema ({
  smellOrTaste: {type: Boolean, required: false},
  achesOrFatigue: {type: Boolean, required: false},
  headache: {type: Boolean, required: false},
  fever: {type: Boolean, required: false},
  cough: {type: Boolean, required: false},
  breathing: {type: Boolean, required: false},
  soreThroat: {type: Boolean, required: false},
  congestion: {type: Boolean, required: false},
  diarrheaOrVomiting: {type: Boolean, required: false},
  lifeThreatening: {type: Boolean, required: false},
  exposed: {type: Boolean, required: false},
  exposedHow: {type: String, required: false},
  healthProvider: {type: Boolean, required: false},
  sentToDoc: {type: Boolean, required: false},
  sharedPublicly: {type: Boolean, required: false},
  user: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: false
});

module.exports = model('Symptom', symptomSchema);
