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
// Find a patient by ID

const findPatientById = async (req, res) => {
    const { userId } = req.params;

    // Ensure userId is a non-empty string
    if (typeof userId !== 'string' || userId.trim().length === 0) {
        return res.status(400).json({ message: 'Invalid userId format' });
    }

    try {
        const patient = await Patient.findOne({ userId });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({ message: 'Patient found successfully', patient });
    } catch (error) {
        console.error('Error finding patient:', error);
        res.status(500).json({ message: 'Error finding patient', error: error.message });
    }
};

// Find all patients
const findAllPatients = async (req, res) => {
    try {
        // Retrieve all patients from the database
        const patients = await Patient.find();

        if (patients.length === 0) {
            return res.status(404).json({ message: 'No patients found' });
        }

        // Send the list of patients
        res.status(200).json({
            message: 'Patients retrieved successfully',
            patients,
        });
    } catch (error) {
        console.error('Error retrieving patients:', error);
        res.status(500).json({
            message: 'Error retrieving patients',
            error: error.message,
        });
    }
};

module.exports = { registerPatient, findPatientById,findAllPatients };