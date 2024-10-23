const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require("validator");
const UserDoctor = require('../models/Doctor');
const { error } = require('console');
const jwtSecret = "abc123";
const Doctor = require('../models/DoctorModel');
const Prescription = require('../models/Prescription');
const Diagnosis = require('../models/Diagnosis');
const Patient = require('../models/PatientModel')
const DoctorAppointment = require('../models/DoctorAppointmentModel'); // Adjust the path based on your project structure



 
const registerUser = asyncHandler(async (req, res) => {
    
    const {name, email, password} =req.body;


    //Validation
    if(!name || !email || !password){
     res.status(400)
     throw new Error('Please include all fields')
    }

     //check whether the email is a valid one
     if (!validator.isEmail(email)) {
    res.status(400)
     throw new Error('Email is not valid')
     }

    




    //Find if user already exists
    const userExists = await UserDoctor.findOne({email})
    
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    


    //Create user
    const user = await UserDoctor.create({
        name,
        email,
        password: hashedPassword,
        
    });

    if(user){
        res.status(201).json({
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        })
 } else{
    res.status(400)
    throw new error('Invalid user data')
 }
 
})



// @desc  Login a user
// @route /api/users/login
// @accesss Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await UserDoctor.findOne({email})

    //Check user and password match
    if(user && (await bcrypt.compare(password, user.password))){

        req.session.email = user.email;
        console.log(req.session.email);

      res.status(200).json({
        _id:user.Id,
        name: user.name,
        email: user.email,
    
        token: generateToken(user._id),  
    })
    
    
     
} else{
    res.status(401)
    throw new Error('Invalid credentials')
}
 
})

// @desc  Get current user
// @route /api/users/me
// @accesss Private
const getMe = asyncHandler(async (req, res) => {
    const user ={
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
    
    res.status(200).json(user)
})

//Generate token
const generateToken = (id, role) => {
    return jwt.sign({ id, role },jwtSecret, {
        expiresIn: '30d',
    })
}

const logoutUser = (req, res) => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  };


// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const { fullName, gender, email, yearsOfExperience, specialization, licenseNumber, workplace } = req.body;

    // Check if the doctor with the same email or license number already exists
    const existingDoctor = await Doctor.findOne({ $or: [{ email }, { licenseNumber }] });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor with this email or license number already exists.' });
    }

    // Create a new doctor object
    const newDoctor = new Doctor({
      fullName,
      gender,
      email,
      yearsOfExperience,
      specialization,
      licenseNumber,
      workplace
    });

    // Save the doctor to the database
    const savedDoctor = await newDoctor.save();

    // Return the saved doctor as a response
    return res.status(201).json({
      message: 'Doctor created successfully.',
      data: savedDoctor
    });

  } catch (error) {
    console.error('Error creating doctor:', error);
    return res.status(500).json({ message: 'An error occurred while creating the doctor.' });
  }
};

// Get a doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Find the doctor by ID
    const doctor = await Doctor.findById(doctorId);

    // If doctor is not found
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }

    // Return the doctor details as a response
    return res.status(200).json({
      message: 'Doctor retrieved successfully.',
      data: doctor
    });

  } catch (error) {
    console.error('Error retrieving doctor:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving the doctor.' });
  }
};

const createPrescription = async (req, res) => {
    try {
      const { medicationName, form, strength, dosage, frequency, duration } = req.body;
  
      // Check if all required fields are provided
      if (!medicationName || !form || !strength || !dosage || !frequency || !duration) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
  
      // Create a new prescription
      const prescription = new Prescription({
        medicationName,
        form,
        strength,
        dosage,
        frequency,
        duration
      });
  
      // Save the prescription to the database
      const savedPrescription = await prescription.save();
  
      // Respond with the saved prescription
      res.status(201).json(savedPrescription);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const createDiagnosis = async (req, res) => {
    try {
      const { primaryDiagnosis, relatedSymptoms, possibleCourse, treatmentPlan } = req.body;
  
      // Check if all required fields are provided
      if (!primaryDiagnosis || !relatedSymptoms || !possibleCourse || !treatmentPlan) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
  
      // Create a new diagnosis report
      const diagnosis = new Diagnosis({
        primaryDiagnosis,
        relatedSymptoms,
        possibleCourse,
        treatmentPlan
      });
  
      // Save the diagnosis report to the database
      const savedDiagnosis = await diagnosis.save();
  
      // Respond with the saved diagnosis report
      res.status(201).json(savedDiagnosis);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Create Patient function
const createPatient = async (req, res) => {
    try {
      // Extract data from the request body
      const {
        userId,
        email,
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
        privacyConsent
      } = req.body;
  
      // Validate required fields
      if (!userId || !email || !birthDate || !gender || !address || !occupation || !emergencyContactName || !emergencyContactNumber || !primaryPhysician || !insuranceProvider || !insurancePolicyNumber || !allergies || !currentMedication || !familyMedicalHistory || !pastMedicalHistory || !identificationType || !identificationNumber || privacyConsent === undefined) {
        return res.status(400).json({ message: 'Please fill in all required fields' });
      }
  
      // Create new patient instance
      const newPatient = new Patient({
        userId,
        email,
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
        privacyConsent
      });
  
      // Save patient to the database
      const savedPatient = await newPatient.save();
  
      // Return the created patient
      res.status(201).json(savedPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, could not create patient' });
    }
  };

  // Create Doctor Appointment function
const createAppointment = async (req, res) => {
    try {
      const { patientId, doctorId, appointmentDate, time, prescriptionId, diagnosisId } = req.body;
  
      // Validate required fields
      if (!patientId || !doctorId || !appointmentDate || !time) {
        return res.status(400).json({ message: 'Please provide all required fields: patientId, doctorId, appointmentDate, and time' });
      }
  
      // Check if the patient exists
      const patient = await Patient.findById(patientId);
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      // Check if the doctor exists
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      // Create new appointment instance
      const newAppointment = new DoctorAppointment({
        patient: patientId,
        appointmentDate,
        time,
        doctor: doctorId,
        prescription: prescriptionId || null,
        diagnosis: diagnosisId || null,
      });
  
      // Save appointment to the database
      const savedAppointment = await newAppointment.save();
  
      // Return the created appointment
      res.status(201).json(savedAppointment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, could not create appointment' });
    }
  };

  const getPatientById = async (req, res) => {
    const {id}  = req.params; // Extract userId from route params
  
    try {
      const patient = await Patient.findById(id);
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      return res.status(200).json(patient); // Return the patient data
    } catch (error) {
      console.error('Error fetching patient details:', error);
      return res.status(500).json({ message: 'Error retrieving patient details' });
    }
  };
  // Function to get a doctor by email
  const getDoctorByEmail = async (req, res) => {
    const email = req.params.email; // Assuming the email is passed as a URL parameter, e.g., /api/doctor/:email
  
    try {
      const doctor = await Doctor.findOne({ email });
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found', success: false });
      }
      return res.status(200).json({ doctor, success: true });
    } catch (error) {
      console.error('Error fetching doctor by email:', error);
      return res.status(500).json({ message: 'Error fetching doctor', success: false, error });
    }
  };



// Function to get all appointments
const getAllAppointments = async (req, res) => {
  try {
    // Fetch all appointments and populate the referenced models (Patient, Doctor, Prescription, Diagnosis)
    const appointments = await DoctorAppointment.find()
      .populate('patient', 'name age')  // Customize the fields you want to retrieve
      .populate('doctor', 'name specialization')
      .populate('prescription')
      .populate('diagnosis')
      .exec();

    // Send response with fetched appointments
    res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments',
      error: error.message
    });
  }
};

// Function to get all patients
const getAllPatients = async (req, res) => {
  try {
    // Fetch all patients
    const patients = await Patient.find().exec();

    // Send response with fetched patients
    res.status(200).json({
      success: true,
      data: patients
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: 'Failed to fetch patients',
      error: error.message
    });
  }
};


  
module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser,
    createDoctor,
    getDoctorById,
    createPrescription,
    createDiagnosis,
    createPatient,
    createAppointment,
    getPatientById,
    getDoctorByEmail,
    getAllAppointments,
    getAllPatients,
}
