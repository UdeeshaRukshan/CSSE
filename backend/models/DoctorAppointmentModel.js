const mongoose = require('mongoose');

// DoctorAppointment Schema
const doctorAppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true
  },
  prescription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prescription', // Reference to the Prescription model
    default: null
  },
  diagnosis: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Diagnosis', // Reference to the Diagnosis model
    default: null
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Export DoctorAppointment model
const DoctorAppointment = mongoose.model('DoctorAppointment', doctorAppointmentSchema);

module.exports = DoctorAppointment;
