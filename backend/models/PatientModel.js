const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true},
  birthDate: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  occupation: { type: String, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  primaryPhysician: { type: String, required: true },
  insuranceProvider: { type: String, required: true },
  insurancePolicyNumber: { type: String, required: true },

  allergies: { type: [String], required: true },
  currentMedication: { type: [String], required: true },
  familyMedicalHistory: { type: [String], required: true },
  pastMedicalHistory: { type: [String], required: true },
  
  identificationType: { type: String, required: true },
  identificationNumber: { type: String, required: true },
  identificationDocument: { type: String }, 
  privacyConsent: { type: Boolean, required: true },
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
