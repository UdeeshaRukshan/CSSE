const OtherStaff = require("../models/OtherStaff");
const mongoose = require("mongoose");

const registerOtherStaff = async (req, res) => {
    try {
        const {
            fullname,
            age,
            contact,
            email,
            role
        } = req.body;

        const newOtherStaff = new OtherStaff({
            fullname,
            age,
            contact,
            email,
            role
        });

        const savedOtherStaff = await newOtherStaff.save();

        res.status(201).json({
            message: 'Staff Memeber registered successfully',
            staff: savedOtherStaff,
        });

    } catch (error) {
        console.error('Error registering Staff Member:', error);
        res.status(500).json({
            message: 'Error registering Staff Member',
            error: error.message,
        });
    }
};

const getAllOtherStaff = async (req, res) => {
    try {
        const otherStaff= await OtherStaff.find(); // Fetch all doctors from the database

        res.status(200).json({
            message: 'Staff retrieved successfully',
            OtherStaff: otherStaff,
        });
    } catch (error) {
        console.error('Error retrieving staff:', error);
        res.status(500).json({
            message: 'Error retrieving staff',
            error: error.message,
        });
    }
};

module.exports = {registerOtherStaff,getAllOtherStaff}