// routes/patientRoutes.js
const express = require('express');
const { registerPatient } = require('../controllers/PatientController'); 

const router = express.Router();

// POST route for registering a new patient
router.post('/register', registerPatient);

module.exports = router;
