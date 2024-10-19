import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { createTransport } from 'nodemailer'; // For sending temporary password
import { findOne, find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/UserModel';

// Generate JWT Token
const generateToken = (user) => {
  return sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Login Controller
// export async function loginUser(req, res) {
//   const { email, password } = req.body;
  
//   try {
//     const user = await findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const isMatch = await compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = generateToken(user);
//     const role = user.role;

//     // Redirect based on role
//     let redirectUrl = '';
//     switch (role) {
//       case 'admin':
//         redirectUrl = '/admin/dashboard';
//         break;
//       case 'doctor':
//         redirectUrl = '/doctor/dashboard';
//         break;
//       case 'patient':
//         redirectUrl = '/patient/dashboard';
//         break;
//       case 'pharmacist':
//         redirectUrl = '/pharmacist/dashboard';
//         break;
//     }

//     res.json({ token, redirectUrl });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// }

// Get all users
export async function getAllUsers(req, res) {
  try {
    const users = await find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
}

// Get user by ID
export async function getUserById(req, res) {
  try {
    const user = await findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
}

// Update user
export async function updateUser(req, res) {
  try {
    const user = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
}

// Delete user
export async function deleteUser(req, res) {
  try {
    const user = await findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
}

// Reset password (send temporary password)
export async function resetPassword(req, res) {
  try {
    const user = await findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const tempPassword = Math.random().toString(36).slice(-8);
    user.password = await hash(tempPassword, 10);
    await user.save();

    // Send email with temporary password
    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Temporary Password',
      text: `Your temporary password is: ${tempPassword}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return res.status(500).json({ message: 'Error sending email' });
      res.json({ message: 'Temporary password sent to your email' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
