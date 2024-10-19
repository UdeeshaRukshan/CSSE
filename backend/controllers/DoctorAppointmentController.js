const DoctorAppointment = require('../models/DoctorAppointmentModel') // Importing the DoctorAppointment model
const Prescription = require('../models/Prescription');
const Diagnosis = require('../models/Diagnosis');

// Async function to get a patient's medical history
const getPatientMedicalHistory = async (req, res) => {
  try {
    const { patientId } = req.params; // Extract patient ID from request parameters

    // Find all appointments for the given patient and populate doctor, prescription, and diagnosis
    const medicalHistory = await DoctorAppointment.find({ patient: patientId })
      .populate('doctor','fullName') // Populate doctor details (name)
      .populate('prescription')   // Populate prescription details
      .populate('diagnosis')      // Populate diagnosis details
      .exec();                    // Execute the query

    // If no medical history is found for the patient
    if (!medicalHistory || medicalHistory.length === 0) {
      return res.status(404).json({ message: 'No medical history found for this patient.' });
    }

    // Return the medical history as a JSON response
    return res.status(200).json({
      message: 'Patient medical history retrieved successfully.',
      data: medicalHistory
    });

  } catch (error) {
    // Handle errors and return a 500 status
    console.error('Error retrieving patient medical history:', error);
    return res.status(500).json({ message: 'An error occurred while fetching medical history.' });
  }
};

// Create a new prescription and link it to an appointment
const createPrescriptionForAppointment = async (req, res) => {
    try {
      const { appointmentId } = req.params; // Get the appointment ID from the request parameters
      const { medicationName, form, strength, dosage, frequency, duration } = req.body; // Extract prescription data from request body
  
      // Create a new prescription
      const newPrescription = new Prescription({
        medicationName,
        form,
        strength,
        dosage,
        frequency,
        duration
      });
  
      // Save the prescription to the database
      const savedPrescription = await newPrescription.save();
  
      // Update the appointment to include this prescription
      const updatedAppointment = await DoctorAppointment.findByIdAndUpdate(
        appointmentId,
        { prescription: savedPrescription._id }, // Associate prescription with the appointment
        { new: true } // Return the updated document
      ).populate('prescription'); // Populate prescription details
  
      // If the appointment is not found
      if (!updatedAppointment) {
        return res.status(404).json({ message: 'Appointment not found.' });
      }
  
      // Respond with the updated appointment
      return res.status(200).json({
        message: 'Prescription added to appointment successfully.',
        data: updatedAppointment
      });
    } catch (error) {
      console.error('Error adding prescription to appointment:', error);
      return res.status(500).json({ message: 'An error occurred while adding the prescription.' });
    }
  };
  // Create a new diagnosis and link it to an appointment
const createDiagnosisForAppointment = async (req, res) => {
    try {
      const { appointmentId } = req.params; // Get the appointment ID from the request parameters
      const { primaryDiagnosis, relatedSymptoms, possibleCourse, treatmentPlan } = req.body; // Extract diagnosis data from request body
  
      // Create a new diagnosis
      const newDiagnosis = new Diagnosis({
        primaryDiagnosis,
        relatedSymptoms,
        possibleCourse,
        treatmentPlan
      });
  
      // Save the diagnosis to the database
      const savedDiagnosis = await newDiagnosis.save();
  
      // Update the appointment to include this diagnosis
      const updatedAppointment = await DoctorAppointment.findByIdAndUpdate(
        appointmentId,
        { diagnosis: savedDiagnosis._id }, // Associate diagnosis with the appointment
        { new: true } // Return the updated document
      ).populate('diagnosis'); // Populate diagnosis details
  
      // If the appointment is not found
      if (!updatedAppointment) {
        return res.status(404).json({ message: 'Appointment not found.' });
      }
  
      // Respond with the updated appointment
      return res.status(200).json({
        message: 'Diagnosis added to appointment successfully.',
        data: updatedAppointment
      });
    } catch (error) {
      console.error('Error adding diagnosis to appointment:', error);
      return res.status(500).json({ message: 'An error occurred while adding the diagnosis.' });
    }
  };

  // Get all appointments for a specific doctor
const getAppointmentsByDoctor = async (req, res) => {
    try {
      const { doctorId } = req.params; // Get the doctor's ID from the request parameters
  
      // Find all appointments where the doctor field matches the provided doctorId
      const appointments = await DoctorAppointment.find({ doctor: doctorId })
        .populate('patient')       // Populate patient details
        .populate('prescription')  // Populate prescription details (if needed)
        .populate('diagnosis');    // Populate diagnosis details (if needed)
  
      // If no appointments are found
      if (!appointments || appointments.length === 0) {
        return res.status(404).json({ message: 'No appointments found for this doctor.' });
      }
  
      // Return the list of appointments
      return res.status(200).json({
        message: 'Appointments retrieved successfully.',
        data: appointments
      });
    } catch (error) {
      console.error('Error retrieving appointments for doctor:', error);
      return res.status(500).json({ message: 'An error occurred while retrieving the appointments.' });
    }
  };

  // Get today's appointments for the logged-in doctor
const getTodayAppointmentsForDoctor = async (req, res) => {
    try {
      // Assuming the doctor's ID is available in req.user._id after login
      //const doctorId = req.user._id;
      const {doctorId} = req.params;
  
      // Get the start and end of today
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0); // Start of the day
  
      const endOfToday = new Date();
      endOfToday.setHours(23, 59, 59, 999); // End of the day
  
      // Find all appointments where the doctor matches the logged-in doctor and the appointmentDate is today
      const appointments = await DoctorAppointment.find({
        doctor: doctorId,
        appointmentDate: { $gte: startOfToday, $lte: endOfToday }
      })
        .populate('patient')       // Populate patient details
        .populate('prescription')  // Populate prescription details (if needed)
        .populate('diagnosis');    // Populate diagnosis details (if needed)
  
      // If no appointments are found
      if (!appointments || appointments.length === 0) {
        return res.status(404).json({ message: 'No appointments found for today.' });
      }
  
      // Return the list of today's appointments
      return res.status(200).json({
        message: 'Today’s appointments retrieved successfully.',
        data: appointments
      });
    } catch (error) {
      console.error('Error retrieving today’s appointments:', error);
      return res.status(500).json({ message: 'An error occurred while retrieving the appointments.' });
    }
  };

  // Get upcoming appointments for the logged-in doctor (from tomorrow onward)
const getUpcomingAppointmentsForDoctor = async (req, res) => {
    try {
      // Assuming the doctor's ID is available in req.user._id after login
      const {doctorId} = req.params;
  
      // Get the start of tomorrow
      const today = new Date();
      const startOfTomorrow = new Date(today.setDate(today.getDate() + 1));
      startOfTomorrow.setHours(0, 0, 0, 0); // Start of tomorrow
  
      // Find all appointments where the doctor matches the logged-in doctor and the appointmentDate is from tomorrow onward
      const upcomingAppointments = await DoctorAppointment.find({
        doctor: doctorId,
        appointmentDate: { $gte: startOfTomorrow }
      })
        .populate('patient')       // Populate patient details
        .populate('prescription')  // Populate prescription details (if needed)
        .populate('diagnosis');    // Populate diagnosis details (if needed)
  
      // If no upcoming appointments are found
      if (!upcomingAppointments || upcomingAppointments.length === 0) {
        return res.status(404).json({ message: 'No upcoming appointments found.' });
      }
  
      // Return the list of upcoming appointments
      return res.status(200).json({
        message: 'Upcoming appointments retrieved successfully.',
        data: upcomingAppointments
      });
    } catch (error) {
      console.error('Error retrieving upcoming appointments:', error);
      return res.status(500).json({ message: 'An error occurred while retrieving the appointments.' });
    }
  };
   

module.exports = { getPatientMedicalHistory,createPrescriptionForAppointment,createDiagnosisForAppointment,getAppointmentsByDoctor,getTodayAppointmentsForDoctor,getUpcomingAppointmentsForDoctor };
