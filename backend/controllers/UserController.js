const User = require('../models/UserModel'); // Adjust the path as necessary
const bcrypt = require('bcryptjs');
const loggerService = require('../util/LoggerService'); // Import existing logger
const { sendNotificationEmail } = require('../util/AppointmentNotifications'); // Import email notification utility
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY || 'yourSecretKey';

// Create a new user
const createUser = async (req, res) => {
  try {
      // Hash password before saving user
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({ ...req.body, password: hashedPassword });
      
      // Save the user to the database
      await user.save();
      loggerService.info(`User created successfully: ${user._id}`);

      // Send welcome email
      await sendNotificationEmail({
          patientEmail: user.email,
          subject: 'Welcome!',
          message: `Thank you for registering, ${user.name}!`,
      });

      // Generate JWT token
      const secretKey = process.env.JWT_SECRET_KEY||'yourSecretKey'; // Use environment variable for security
      if (!secretKey) {
        throw new Error('JWT secret key is missing');
      }

      const authToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
      
      // Set cookie with the JWT token
      res.cookie('authToken', authToken, {
          httpOnly: true, // Prevent access from client-side scripts
          secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
          maxAge: 3600000, // 1 hour
          sameSite: 'Strict', // Prevent cross-site request forgery
      });

      // Respond with success and user data
      return res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
      loggerService.error(`Error creating user: ${error.message}`);
      return res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};


// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
          loggerService.warn(`Invalid login attempt for email: ${email}`);
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare passwords using bcrypt
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          loggerService.warn(`Invalid password attempt for user: ${user._id}`);
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate auth token (JWT)
      const authToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

      // Set auth token as a cookie
      res.cookie('authToken', authToken, {
          httpOnly: true,
          maxAge: 3600000, // 1 hour
          secure: false,  // Set to true if using HTTPS
          sameSite: 'strict',
      });

      loggerService.info(`User logged in: ${user._id}`);
      return res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
      loggerService.error(`Error logging in: ${error.message}`);
      return res.status(500).json({ message: 'Server error' });
  }
};

// Signup Controller
const signupUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists with this email' });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
          name,
          email,
          phone,
          password: hashedPassword,
      });

      // Save the new user to the database
      const savedUser = await newUser.save();
      loggerService.info(`User registered successfully: ${savedUser._id}`);

      // Set auth token as a cookie
      const authToken = jwt.sign({ userId: savedUser._id }, secretKey, { expiresIn: '1h' });
      res.cookie('authToken', authToken, {
          httpOnly: true,
          maxAge: 3600000, // 1 hour
      });

      // Send welcome email
      await sendNotificationEmail({
          patientEmail: savedUser.email,
          subject: 'Welcome!',
          message: `Thank you for registering, ${savedUser.name}!`,
      });

      // Send a success response
      return res.status(201).json({
          message: 'User registered successfully',
          userId: savedUser._id,
      });
  } catch (error) {
      loggerService.error(`Error during user registration: ${error.message}`);
      return res.status(500).json({ message: 'Server error' });
  }
};


// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        loggerService.info(`Fetched ${users.length} users successfully.`);
        return res.status(200).json(users);
    } catch (error) {
        loggerService.error(`Error fetching users: ${error.message}`);
        return res.status(500).json({ message: 'Error fetching users' });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            loggerService.warn(`User not found for ID: ${id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        loggerService.info(`Fetched user: ${user._id}`);
        return res.status(200).json(user);
    } catch (error) {
        loggerService.error(`Error fetching user by ID: ${error.message}`);
        return res.status(500).json({ message: 'Error fetching user' });
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            loggerService.warn(`User not found for update: ${id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        loggerService.info(`User updated successfully: ${user._id}`);
        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        loggerService.error(`Error updating user: ${error.message}`);
        return res.status(400).json({ message: error.message });
    }
};


// Delete a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            loggerService.warn(`User not found for deletion: ${id}`);
            return res.status(404).json({ message: 'User not found' });
        }

        loggerService.info(`User deleted successfully: ${user._id}`);
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        loggerService.error(`Error deleting user: ${error.message}`);
        return res.status(500).json({ message: error.message });
    }
};

// Export the functions using CommonJS
module.exports = {
    createUser,
    signupUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
};
