const Staff = require("../models/StaffModel");
const mongoose = require("mongoose");

const registerStaff = async(req,res)=>{
    try{
        const{
            staffId,
            username,
            fullName,
            email,
            position,
            contact,
            password
        } = req.body;

        const newStaff = new Staff({
            staffId,
            username,
            fullName,
            email,
            position,
            contact,
            password
        });

        const savedStaff = await newStaff.save();

        res.status(201).json({
            message: 'Staff member registered successfully',
            staff: savedStaff,
        });

    }catch(error){
        console.error('Error registering Staff Member:', error);
        res.status(500).json({
            message: 'Error registering Staff Member',
            error: error.message,
        });
    }
}

const findStaffByUsername = async (req, res) => {
    const { username } = req.params;

    // Ensure username is a non-empty string
    if (typeof username !== 'string' || username.trim().length === 0) {
        return res.status(400).json({ message: 'Invalid username format' });
    }

    try {
        const staff = await Staff.findOne({ username });

        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }

        res.status(200).json({ message: 'Staff found successfully', staff });
    } catch (error) {
        console.error('Error finding staff:', error);
        res.status(500).json({ message: 'Error finding staff', error: error.message });
    }
};

module.exports = { findStaffByUsername };
