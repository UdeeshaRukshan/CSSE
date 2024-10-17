const express = require('express');
const userController = require('../controllers/UserController'); // Adjust the path as necessary

const router = express.Router();

// User Routes
router.post('/', userController.createUser); // Create a new user
router.get('/', userController.getAllUsers); // Get all users
router.get('/:id', userController.getUserById); // Get a user by ID
router.put('/:id', userController.updateUser); // Update a user by ID
router.delete('/:id', userController.deleteUser); // Delete a user by ID
router.post('/login', userController.loginUser); // User login
router.post('/signup', userController.signupUser); // User signup

module.exports = router;
