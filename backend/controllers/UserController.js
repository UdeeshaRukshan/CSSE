const User = require('../models/UserModel'); // Adjust the path as necessary
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const secretKey = process.env.JWT_SECRET_KEY || 'yourSecretKey'; 

// Create a new user
// exports.createUser = async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json({ message: 'User created successfully', user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Signup Controller
exports.signupUser = async (req, res) => {
    const { name, email, phone, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password before saving the user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword, // Store the hashed password
            role
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send a success response
        res.status(201).json({
            message: 'User registered successfully',
            userId: savedUser._id,
        });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({
            message: 'Server error',
        });
    }
};



// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Set userId as a cookie without encryption
        res.cookie('userId', user._id, {
            httpOnly: false, // Allow JavaScript access to this cookie
            maxAge: 3600000, // 1 hour
        });

        // Send a success response
        res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Get user role by ID
exports.getRoleByUserId = async (req, res) => {
  try {
      // Find the user by ID
      const user = await User.findById(req.params.id);
      
      // Check if user exists
      if (!user) {
          return res.status(404).json({ message: 'User  not found' });
      }

      // Send the user's role in the response
      res.status(200).json({ role: user.role });
  } catch (error) {
      console.error('Error retrieving user role:', error);
      res.status(500).json({ message: 'Server error' });
  }
};


// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
