const Staff = require("../models/StaffModel");
const mongoose = require("mongoose");

const registerStaff = async (req, res) => {
    try {
        const {
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

    } catch (error) {
        console.error('Error registering Staff Member:', error);
        res.status(500).json({
            message: 'Error registering Staff Member',
            error: error.message,
        });
    }
};

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

const loginStaff = async (req, res) => {
    const { username, password } = req.params; // Use req.body instead of req.params

    try {
        // Find the staff member by username
        const staff = await Staff.findOne({ username });

        // Check if staff member exists
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }

        // Compare the entered password with the stored password
        if (staff.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If password is valid, return success message and staff info
        res.status(200).json({
            message: 'Login successful',
            staff: {
                staffId: staff.staffId,
                username: staff.username,
                fullName: staff.fullName,
                email: staff.email,
                position: staff.position,
                contact: staff.contact
            }
        });
    } catch (error) {
        console.error('Error logging in staff:', error);
        res.status(500).json({ message: 'Error logging in staff', error: error.message });
    }
};


module.exports = {
    registerStaff,
    findStaffByUsername,
    loginStaff
};

