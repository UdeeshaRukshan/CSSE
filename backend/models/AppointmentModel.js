// models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  doctor: {
    type: String, // or Schema.Types.ObjectId if you're referencing a Doctor model
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'], // Example statuses
    default: 'scheduled',
  },
  note: {
    type: String,
    required: false,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports= Appointment;
