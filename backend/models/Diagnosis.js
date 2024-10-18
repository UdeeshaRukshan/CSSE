const mongoose = require('mongoose');

// Diagnosis Schema
const diagnosisSchema = new mongoose.Schema({
  primaryDiagnosis: {
    type: String,
    required: true,
    trim: true
  },
  relatedSymptoms: {
    type: String,
    required: true,
    trim: true
  },
  possibleCourse: {
    type: String,
    required: true,
    trim: true
  },
  treatmentPlan: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Export Diagnosis model
const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);

module.exports = Diagnosis;
