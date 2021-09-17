const { Schema, model} = require('mongoose');

const symptomSchema = new Schema ({
  smellOrTaste: {type: Boolean, required: true},
  achesOrFatigue: {type: Boolean, required: true},
  headache: {type: Boolean, required: true},
  fever: {type: Boolean, required: true},
  cough: {type: Boolean, required: true},
  breathing: {type: Boolean, required: true},
  soreThroat: {type: Boolean, required: true},
  congestion: {type: Boolean, required: true},
  diarrheaOrVomiting: {type: Boolean, required: true},
  lifeThreatening: {type: Boolean, required: true},
  exposed: {type: Boolean, required: true},
  exposedHow: {type: String, required: true},
  healthProvider: {type: Boolean, required: true},
  sentToDoc: {type: Boolean, required: true},
  sharedPublicly: {type: Boolean, required: true},
  user: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
});

module.exports = model('Symptom', symptomSchema);
