// controllers/patientController.js
const Patient = require('../models/PatientModel'); 
const mongoose = require('mongoose');

// Register a new patient
const registerPatient = async (req, res) => {
    try {
        const {
            userId,
            name,
            email,
            phone,
            birthDate,
            gender,
            address,
            occupation,
            emergencyContactName,
            emergencyContactNumber,
            primaryPhysician,
            insuranceProvider,
            insurancePolicyNumber,
            allergies,
            currentMedication,
            familyMedicalHistory,
            pastMedicalHistory,
            identificationType,
            identificationNumber,
            identificationDocument,
            privacyConsent,
        } = req.body;

        // Create a new patient instance
        const newPatient = new Patient({
            userId,
            name,
            email,
            phone,
            birthDate,
            gender,
            address,
            occupation,
            emergencyContactName,
            emergencyContactNumber,
            primaryPhysician,
            insuranceProvider,
            insurancePolicyNumber,
            allergies,
            currentMedication,
            familyMedicalHistory,
            pastMedicalHistory,
            identificationType,
            identificationNumber,
            identificationDocument,
            privacyConsent,
        });

        // Save the patient to the database
        const savedPatient = await newPatient.save();

        // Send a success response
        res.status(201).json({
            message: 'Patient registered successfully',
            patient: savedPatient,
        });
    } catch (error) {
        console.error('Error registering patient:', error);
        res.status(500).json({
            message: 'Error registering patient',
            error: error.message,
        });
    }
};

module.exports = { registerPatient };
