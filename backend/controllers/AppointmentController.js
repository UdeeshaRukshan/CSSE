const Appointment = require('../models/AppointmentModel');

// Create an appointment
const createAppointment = async (req, res) => {
  const { userId, patientId, doctor, schedule, reason, status, note } = req.body;

  try {
    // Create a new appointment instance
    const newAppointment = new Appointment({
      userId,
      patientId,
      doctor,
      schedule,
      reason,
      status,
      note,
    });

    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();
    return res.status(201).json(savedAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ message: 'Error creating appointment' });
  }
};

// Optionally, you can have a method to fetch appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    return res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return res.status(500).json({ message: 'Error fetching appointments' });
  }
};
const getAppointmentById = async (req, res) => {
    const { id } = req.params; // Get ID from request parameters
  
    try {
      const appointment = await Appointment.findById(id); // Find appointment by ID
  
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      return res.status(200).json(appointment); // Return the found appointment
    } catch (error) {
      console.error('Error fetching appointment by ID:', error);
      return res.status(500).json({ message: 'Error fetching appointment' });
    }
  };
  
  // Export the functions using CommonJS
  module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
  };