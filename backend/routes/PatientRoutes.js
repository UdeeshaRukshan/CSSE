// routes/patientRoutes.js
const express = require('express');
const { registerPatient ,findPatientById, findAllPatients} = require('../controllers/PatientController'); 


const router = express.Router();

// POST route for registering a new patient
router.post('/register', registerPatient);
router.get('/:userId', findPatientById);findAllPatients
router.get('/', findAllPatients);

module.exports = router;
