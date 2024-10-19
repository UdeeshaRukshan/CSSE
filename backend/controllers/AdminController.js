// // import { findOne, find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/User';
// // import { compare, hash } from 'bcrypt';
// // import { sign } from 'jsonwebtoken';
// // import { createTransport } from 'nodemailer'; // For sending temporary password

// const { findOne, find, findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
// const { compare, hash } = require('bcrypt');
// const { sign } = require('jsonwebtoken');
// const { createTransport } = require('nodemailer'); // For sending temporary password

// // Generate JWT Token
// // const generateToken = (user) => {
// //   return sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
// // };

// // Get all users
// export async function getAllUsers(req, res) {
//   try {
//     const users = await find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users' });
//   }
// }

// // Get user by ID
// export async function getUserById(req, res) {
//   try {
//     const user = await findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user' });
//   }
// }

// // Update user
// export async function updateUser(req, res) {
//   try {
//     const user = await findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating user' });
//   }
// }

// // Delete user
// export async function deleteUser(req, res) {
//   try {
//     const user = await findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ message: 'User deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting user' });
//   }
// }







// const User = require('../models/UserModel'); // Adjust the path as necessary


// // Reset password (send temporary password)
// exports.resetPassword = async(req, res) => {
//   try {
//     // const user = await User.findOne({ email: req.body.email });
//     // if (!user) return res.status(404).json({ message: 'User not found' });

//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
    
//     const tempPassword = Math.random().toString(36).slice(-8);
//     user.password = await hash(tempPassword, 10);
//     await user.save();

//     // Send email with temporary password
//     const transporter = createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: user.email,
//       subject: 'Temporary Password',
//       text: `Your temporary password is: ${tempPassword}`,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) return res.status(500).json({ message: 'Error sending email' });
//       res.json({ message: 'Temporary password sent to your email' });
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// }


const User = require('../models/UserModel');
const crypto = require('crypto');
const { hash } = require('bcrypt');
const { createTransport } = require('nodemailer');

// Signup new user
exports.signup = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = new User({ name, email, role });
    
    user.phone = "null"
    user.password = "null"
    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetUrl = `http://localhost:3000/login/admin/components/reset?token=${resetToken}&id=${user._id}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Welcome to CarePulse - Set Your Password',
      html: `
        <p>Welcome to CarePulse!</p>
        <p>Please click on the following link to set your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 1 hour.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'User created successfully. Check email for password reset link.' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { userId, resetToken, newPassword } = req.body;
    const user = await User.findOne({
      _id: userId,
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
    }

    user.password = await hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password has been reset' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password', error: error.message });
  }
};