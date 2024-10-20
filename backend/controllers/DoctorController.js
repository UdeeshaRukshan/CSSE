const Doctor = require("../models/DoctorModel");
const mongoose = require("mongoose");

const registerDoctor = async (req, res) => {
    try {
        const {
            fullname,
            age,
            contact,
            password,
            email,
            specialization,
            experience
        } = req.body;

        const newDoctor = new Doctor({
            fullname,
            age,
            contact,
            password,
            email,
            specialization,
            experience
        });

        const savedDoctor = await newDoctor.save();

        res.status(201).json({
            message: 'Doctor registered successfully',
            staff: savedDoctor,
        });

    } catch (error) {
        console.error('Error registering Doctor:', error);
        res.status(500).json({
            message: 'Error registering Doctor',
            error: error.message,
        });
    }
};

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find(); // Fetch all doctors from the database

        res.status(200).json({
            message: 'Doctors retrieved successfully',
            doctors: doctors,
        });
    } catch (error) {
        console.error('Error retrieving doctors:', error);
        res.status(500).json({
            message: 'Error retrieving doctors',
            error: error.message,
        });
    }
};
const deleteDoctorByUsername = async (req, res) => {
    try {
      const fullname = req.params.fullname;
      const doctor = await Doctor.findOneAndDelete({ fullname });
  
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
      console.error('Error deleting doctor:', error);
      res.status(500).json({ message: 'Server error, could not delete doctor' });
    }
  };
  
module.exports = {registerDoctor,getAllDoctors,deleteDoctorByUsername}