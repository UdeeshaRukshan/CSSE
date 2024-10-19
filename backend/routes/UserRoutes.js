const express = require('express');
const userController = require('../controllers/UserController'); // Adjust the path as necessary

const router = express.Router();

// Create a new user
// router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/:id', userController.updateUser);

// Delete a user by ID
router.delete('/:id', userController.deleteUser);

router.post('/login', userController.loginUser);
router.post('/signup', userController.signupUser);
router.get('/:id/role', userController.getRoleByUserId);


module.exports = router;
