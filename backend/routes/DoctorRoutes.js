const express = require('express');
const router = express.Router();
const { 
    getPatientMedicalHistory,createPrescriptionForAppointment,createDiagnosisForAppointment,getAppointmentsByDoctor,getTodayAppointmentsForDoctor,getUpcomingAppointmentsForDoctor,
} = require('../controllers/DoctorAppointmentController'); // Import the controller functions



// Route to get the medical history of a patient by patientId
router.get('/patient/:patientId/medical-history', getPatientMedicalHistory);

// Route to create a new prescription for an appointment by appointmentId
router.post('/appointment/:appointmentId/prescription', createPrescriptionForAppointment);

// Route to create a new diagnosis for an appointment by appointmentId
router.post('/appointment/:appointmentId/diagnosis', createDiagnosisForAppointment);

// Route to get all appointments for a specific doctor by doctorId
router.get('/doctor/:doctorId/appointments', getAppointmentsByDoctor);

// Route to get today's appointments for the logged-in doctor
router.get('/doctor/:doctorId/today-appointments', getTodayAppointmentsForDoctor);

// Route to get upcoming appointments for the logged-in doctor (from tomorrow onward)
router.get('/doctor/:doctorId/upcoming-appointments', getUpcomingAppointmentsForDoctor);

module.exports = router;

