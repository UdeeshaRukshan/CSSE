const mongoose = require('mongoose');

// Prescription Schema
const prescriptionSchema = new mongoose.Schema({
  medicationName: {
    type: String,
    required: true,
    trim: true
  },
  form: {
    type: String,
    required: true,
    trim: true
  },
  strength: {
    type: String,
    required: true,
    trim: true
  },
  dosage: {
    type: String,
    required: true,
    trim: true
  },
  frequency: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Export Prescription model
const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
